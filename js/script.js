// login functionality
// user email user password login button

const loginButton = document.getElementById("login-button");

const userEmailInput = document.getElementById("user-email");
const userPasswordInput = document.getElementById("user-password");

loginButton.addEventListener("click", function () {
  const userEmail = userEmailInput.value;
  const userPassword = userPasswordInput.value;

  if (userEmail == "jana@alam.com" && userPassword == 123456) {
    window.location.href = "banking.html";
  } else {
    alert("Password does not match");
  }
});
