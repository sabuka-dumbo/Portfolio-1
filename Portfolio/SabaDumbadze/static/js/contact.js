const form = document.getElementById("messageForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  statusText.textContent = "Sending...";

  const formData = {
    name: form.querySelector("input[name='name']").value,
    email: form.querySelector("input[name='email']").value,
    message: form.querySelector("textarea[name='message']").value
  };

  try {
    const response = await fetch("/api/email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.status === "success") {
      statusText.textContent = "✅ " + result.message;
      form.reset();
    } else {
      statusText.textContent = "❌ " + result.message;
    }
  } catch {
    statusText.textContent = "❌ Something went wrong!";
  }
});
