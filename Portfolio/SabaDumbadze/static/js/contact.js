const form = document.getElementById("messageForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  statusText.textContent = "Sending...";

  fetch("/api/email/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    })
  })
  .then(res => res.json())
  .then(data => {
    statusText.textContent = data.status === "success" ? "✅ " + data.message : "❌ " + data.message;
    if (data.status === "success") form.reset();
  })
  .catch(() => {
    statusText.textContent = "❌ Something went wrong!";
  });
});
