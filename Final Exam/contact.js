// Update the footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (name === "" || email === "" || message === "") {
    statusMsg.textContent = "❗ Please fill out all fields.";
    statusMsg.style.color = "red";
    statusMsg.classList.remove("hidden");
    return;
  }

  // Email format check
  if (!email.includes("@") || !email.includes(".")) {
    statusMsg.textContent = "❗ Please enter a valid email address.";
    statusMsg.style.color = "red";
    statusMsg.classList.remove("hidden");
    return;
  }

  // Success
  statusMsg.textContent = "✅ Message sent! We’ll respond soon.";
  statusMsg.style.color = "green";
  statusMsg.classList.remove("hidden");

  // Clear form
  form.reset();
});
