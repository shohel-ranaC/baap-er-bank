document.getElementById("btn-submit").addEventListener("click", () => {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "akash@gmail.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid email & password");
  }
  // console.log(email, password);
});
