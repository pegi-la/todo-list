let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});

//validation form
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginEmailError = document.getElementById("loginEmailError");
const loginPassword = document.getElementById("loginPassword");
const loginPasswordError = document.getElementById("loginPasswordError");

const registerForm = document.getElementById("registerForm");
const registerName = document.getElementById("registerName");
const registerNameError = document.getElementById("registerNameError");
const registerEmail = document.getElementById("registerEmail");
const registerEmailError = document.getElementById("registerEmailError");
const registerPassword = document.getElementById("registerPassword");
const registerPasswordError = document.getElementById("registerPasswordError");

// Regular expression for validating email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression for validating password
// Password must contain at least 8 characters, including at least one letter and one number
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  // Perform validation
  if (email === "" || password === "") {
    loginEmailError.textContent = "Please enter your email address.";
    loginPasswordError.textContent = "Please enter your password.";
  } else if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    loginEmailError.textContent = "Please enter a valid email address.";
    loginPasswordError.textContent =
      "Password must be at least 8 characters long and contain at least one letter and one number.";
  } else {
    // Reset error messages
    loginEmailError.textContent = "";
    loginPasswordError.textContent = "";
  }
  // Check if there are any errors
  if (!loginEmailError.textContent && !loginPasswordError.textContent) {
    // Redirect to todo-list page
    window.location.href = "todo-list.html";
  }
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = registerName.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();

  // Reset error messages
  registerNameError.textContent = "";
  registerEmailError.textContent = "";
  registerPasswordError.textContent = "";

  // Perform validation
  if (name === "" || email === "" || password === "") {
    registerNameError.textContent = "Please enter your name.";
    registerEmailError.textContent = "Please enter your email address.";
    registerPasswordError.textContent = "Please enter your password.";
  } else if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    registerEmailError.textContent = "Please enter a valid email address.";
    "Password must be at least 8 characters long and contain at least one letter and one number.";
  } 
  // Check if there are any errors
  if (
    !registerNameError.textContent &&
    !registerEmailError.textContent &&
    !registerPasswordError.textContent
  ) {
    // Redirect to todo-list page
    window.location.href = "todo-list.html";
  }
});
