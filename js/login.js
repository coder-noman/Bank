document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "bank@gmail.com" && password === "bank") {
        window.location.href = 'bank.html'
  } else {
    alert("enter correct email and password");
  }
  emailField.value = "";
  passwordField.value = "";
});
