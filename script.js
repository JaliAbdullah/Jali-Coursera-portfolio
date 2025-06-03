// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recommendation-form");
  const input = document.getElementById("recommendation-input");
  const list = document.getElementById("recommendation-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
      // Add new recommendation to the list
      const li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);

      // Show confirmation popup
      alert("Thank you for leaving a recommendation!");

      // Clear input
      input.value = "";
    }
  });
});
