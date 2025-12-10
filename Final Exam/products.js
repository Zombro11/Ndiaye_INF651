// products.js — unified products page for CleatSales (consistent names)

// ---------- Sample product data (array of objects) ----------
const products = [ 
{ id: 1, name: "Nike Mercurial Vapor 16 Elite By You", brand: "Nike", price: 289.99, sizes: [8,9,10,11], img: "custom-nike-mercurial-vapor-16-elite-by-you.avif", desc: "Custom AG-Pro Low-Top Soccer Cleats" }, 
{ id: 2, name: "adidas X Crazyfast League Lionel Messi", brand: "Adidas", price: 179.99, sizes: [7,8,9,10,12], img: "21211457.webp", desc: "Top control and grip." }, 
{ id: 3, name: "PUMA ULTRA 1.3 FG/AG", brand: "Puma", price: 139.99, sizes: [9,10,11], img: "download_2d7fdd5f-4b15-4e33-9331-681a5a24a455_2000x.webp", desc: "Comfort and durability." }, 
{ id: 4, name: "UnderArmour Shadow Select 3 FG", brand: "Under Armour", price: 54.97, sizes: [8,9,10], img: "3028291-004_DEFAULT.webp", desc: "Budget-friendly performer." }, 
{ id: 5, name: "Nike Mercurial Superfly 9 Academy MG High-Top", brand: "Nike", price: 69.99, sizes: [8,9,10,11,12], img: "AURORA_DJ5625-601_PHSLH001-2000_2000x.webp", desc: "Precision for playmakers." }, 
{ id: 6, name: "Adidas F50 Elite Lightstrike Laceless FG White/Red/Yellow", brand: "Adidas", price: 109.99, sizes: [7,8,9], img: "adidas-f50-elite-lightstrike-laceless-fg-firm-ground-soccer-cleats-white-red-yellow.png", desc: "Affordable speed option." }, 
{ id: 7, name: "Adidas Men's Predator Pro Tongue FG", brand: "Adidas", price: 111.99, sizes: [7,8,9,10,12], img: "shopping-1.webp", desc: "Top control and grip." } 
]; 

 

// ---------- Cart (array of cart items) ----------
let cart = JSON.parse(localStorage.getItem('cleatCart')) || []; // each item: { productId, name, price, qty, size }

// ---------- Cached DOM references ----------
const productsGrid = document.getElementById('products-grid');
const brandFilter = document.getElementById('brand-filter');
const sizeFilter = document.getElementById('size-filter');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const clearFiltersBtn = document.getElementById('clear-filters');

const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');
const cartTotalElem = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const emptyCartBtn = document.getElementById('empty-cart');

// ---------- Utility functions ----------
function formatPrice(n){ return n.toFixed(2); }

// Pull unique brands & sizes into dropdowns
function populateFilters(){
  // reset
  brandFilter.innerHTML = '<option value="all">All brands</option>';
  sizeFilter.innerHTML = '<option value="all">All sizes</option>';

  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  brands.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.textContent = b;
    brandFilter.appendChild(opt);
  });

  // sizes: gather unique sizes sorted
  const sizesSet = new Set();
  products.forEach(p => p.sizes.forEach(s => sizesSet.add(s)));
  const sizes = Array.from(sizesSet).sort((a,b)=>a-b);
  sizes.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = `Size ${s}`;
    sizeFilter.appendChild(opt);
  });
}

// Render product cards based on a list
function renderProducts(list){
  productsGrid.innerHTML = '';
  if(list.length === 0){
    productsGrid.innerHTML = '<div class="empty">No products match your filters.</div>';
    return;
  }
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    // build size options from p.sizes
    const sizeOptions = p.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div>
        <p class="product-name">${p.name}</p>
        <div class="product-meta"><span class="meta-small">${p.brand}</span><strong>$${formatPrice(p.price)}</strong></div>
        <p class="meta-small">${p.desc}</p>
        <div class="meta-small">Available sizes: ${p.sizes.join(', ')}</div>
      </div>
      <div>
        <label class="small-muted" for="size-${p.id}">Size</label>
        <select id="size-${p.id}" class="size-select">
          <option value="">Choose size</option>
          ${sizeOptions}
        </select>
        <button class="add-btn" data-id="${p.id}">Add to cart</button>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  // attach event listeners to add buttons
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const card = btn.closest('.product-card');
      const select = card.querySelector('.size-select');
      const chosenSize = select ? select.value : '';

      if (!chosenSize) {
        alert('Please choose a size before adding to cart.');
        return;
      }
      addToCart(id, Number(chosenSize));
    });
  });
}

// ----- Filtering / Sorting / Searching logic -----
function getFilteredProducts(){
  const brand = brandFilter.value;
  const size = sizeFilter.value;
  const sort = sortSelect.value;
  const query = searchInput.value.trim().toLowerCase();

  let list = [...products];

  if(brand !== 'all') list = list.filter(p => p.brand === brand);
  if(size !== 'all') list = list.filter(p => p.sizes.includes(Number(size)));
  if(query !== '') list = list.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));

  if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
  else if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price);

  return list;
}

function applyFiltersAndRender(){
  const result = getFilteredProducts();
  renderProducts(result);
}

// ----- Cart functions -----
function addToCart(productId, size){
  const prod = products.find(p => p.id === productId);
  if(!prod) return;
  // try to find identical item (same productId and same size)
  const existing = cart.find(i => i.productId === productId && i.size === size);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ productId: productId, name: prod.name, price: prod.price, qty: 1, size: size });
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId, size){
  const idx = cart.findIndex(i => i.productId === productId && i.size === size);
  if(idx === -1) return;
  if(cart[idx].qty > 1){
    cart[idx].qty -= 1;
  } else {
    cart.splice(idx,1);
  }
  saveCart();
  updateCartUI();
}

function emptyCart(){
  cart = [];
  saveCart();
  updateCartUI();
}

function calculateTotal(){
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI(){
  cartList.innerHTML = '';
  if(cart.length === 0){
    cartList.innerHTML = '<li class="empty">Your cart is empty.</li>';
    cartCount.textContent = '0';
    cartTotalElem.textContent = formatPrice(0);
    checkoutBtn.disabled = true;
    return;
  }
  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <span>${item.name} <span class="small-muted">Size ${item.size} ×${item.qty}</span></span>
      <span>
        $${formatPrice(item.price * item.qty)}
        <button data-id="${item.productId}" data-size="${item.size}" class="small-remove">−</button>
      </span>
    `;
    cartList.appendChild(li);
  });

  // attach remove button listeners
  document.querySelectorAll('.small-remove').forEach(b => {
    b.addEventListener('click', () => {
      const id = Number(b.dataset.id);
      const size = Number(b.dataset.size);
      removeFromCart(id, size);
    });
  });

  cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
  cartTotalElem.textContent = formatPrice(calculateTotal());
  checkoutBtn.disabled = false;
}

// ----- Persistence -----
function saveCart(){
  localStorage.setItem('cleatCart', JSON.stringify(cart));
}

// ----- Checkout (demo behavior) -----
checkoutBtn.addEventListener('click', () => {
  alert(`Demo checkout — total is $${formatPrice(calculateTotal())}. This demo does not process payments.`);
});

// Empty cart button
emptyCartBtn.addEventListener('click', () => {
  if(confirm('Empty the cart?')) emptyCart();
});

// ----- Filter controls event listeners -----
brandFilter.addEventListener('change', applyFiltersAndRender);
sizeFilter.addEventListener('change', applyFiltersAndRender);
sortSelect.addEventListener('change', applyFiltersAndRender);
searchInput.addEventListener('input', () => {
  applyFiltersAndRender();
});
clearFiltersBtn.addEventListener('click', () => {
  brandFilter.value = 'all';
  sizeFilter.value = 'all';
  sortSelect.value = 'default';
  searchInput.value = '';
  applyFiltersAndRender();
});

// ----- Initialization -----
document.getElementById('year-products').textContent = new Date().getFullYear();
populateFilters();
applyFiltersAndRender();
updateCartUI();
