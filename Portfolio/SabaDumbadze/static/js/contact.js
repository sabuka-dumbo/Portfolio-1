const form = document.getElementById("messageForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  statusText.textContent = "Sending...";
  setTimeout(() => {
    statusText.textContent = "✅ Message sent successfully!";
    form.reset();
  }, 1200);
});
