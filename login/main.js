// window.addEventListener('DomContentLoaded', () => {
//   localStorage.clear();
// });

const spinnerLog = document.querySelector("#spinnerLog");
const form = document.querySelector(".form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const myButton = document.querySelector(".myButton");
const passwordInput = document.querySelector("#password");
const passwordEye = document.querySelector(".password-eye");

function showSpinner() {
  spinnerLog.style.display = "block";
}

function hideSpinner() {
  spinnerLog.style.display = "none";
}

async function fetchData() {
  const url = `https://script.google.com/macros/s/AKfycbxv-B5kgU0CeVmAt_3thPg_MV4m1QbcnxmqOkvj8lHvsnmdq084DTzjz8uyfKsdehZl/exec`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function saveUserData(user) {
  localStorage.setItem("myUser", user.Username);
  localStorage.setItem("myCode", user.Code);
  localStorage.setItem("myUserRole", user.Role);
  localStorage.setItem("myDepartment", user.Department);
  console.log("myUser : " + localStorage.getItem("myUser"));
  console.log("myCode : " + localStorage.getItem("myCode"));
  console.log("myUserRole : " + localStorage.getItem("myUserRole"));
  console.log("myDepartment : " + localStorage.getItem("myDepartment"));
}

async function handleButtonClick() {
  showSpinner();

  const users = await fetchData();
  const matchedUser = users.find(
    (user) =>
      user.Username === username.value && user.Password === password.value
  );

  if (matchedUser) {
    saveUserData(matchedUser);
    hideSpinner();
    window.location.href = "/SRM.html";
  } else {
    hideSpinner();
    alert("Incorrect Username or Password");
  }
}

myButton.addEventListener("click", handleButtonClick);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

passwordEye.addEventListener("click", function () {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  passwordEye.classList.toggle("fa-eye-slash");
});

// For preventing the back button of the browser
function preventBack() {
  window.history.forward();
}
setTimeout(preventBack, 0);
window.onunload = function () {
  null;
};
