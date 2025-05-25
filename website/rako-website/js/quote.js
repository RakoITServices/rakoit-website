// Dark/Light Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.setAttribute("data-theme", html.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// Form validation
document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("fullname");
  const email = document.getElementById("email");
  const budget = document.getElementById("budget");
  const details = document.getElementById("details");

  [name, email, budget, details].forEach((field) => {
    if (field.value.trim() === "" || (field.tagName === "SELECT" && field.value === "")) {
      field.classList.add("is-invalid");
      valid = false;
    } else {
      field.classList.remove("is-invalid");
    }
  });

  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    email.classList.add("is-invalid");
    valid = false;
  }

  if (valid) {
    alert("Quote submitted successfully!");
    this.reset();
  }
});

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.style.display = "none", 800);
});
