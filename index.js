function visible() {
  let passValue = document.getElementById("password");
  let passImgShow = document.getElementById("show"); //show
  let passImgHide = document.getElementById("hide"); //hide
  if (passValue.type === "password") {
    passValue.type = "Text";
    passImgShow.style.display = "block";
    passImgHide.style.display = "none";
  } else {
    passValue.type = "password";
    passImgShow.style.display = "none";
    passImgHide.style.display = "block";
  }
}

function dashboardNavigation() {
  //signinValidation
  let emailValue = document.getElementById("emailValue").value;
  let passValue = document.getElementById("password").value;
  let dashboardPage = document.getElementById("dashboardMenuContainer");
  let login = document.getElementById("loginPageContainer");
  var mail = "jeevan@mcdinfotech.com";
  var pass = "Jeevan@2022";
  if (emailValue == mail && passValue == pass) {
    dashboardPage.style.display = "block";
    login.style.display = "none";
  } else {
    alert("check email or pass");
  }
}
function passwordValidation() {
  var signinpassForm = document.getElementById("passwordTextField");
  var password = document.getElementById("password").value;
  var textField = document.getElementById("passwordTextField");
  var pattern = "(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
  if (password.match(pattern)) {
    
    signinpassForm.classList.add("valid");
    signinpassForm.classList.remove("invalid");
    textField.innerHTML = "Your Password is Valid";
    textField.style.color = "#00ff00";
  } else {
    signinpassForm.classList.remove("valid");
    signinpassForm.classList.add("invalid");
    textField.innerHTML = "Your Password is invalid ";
    textField.style.color = "#ff0000";
  }
}

function emailValidation() {
  var signinForm = document.getElementById("siginEmailForm");
  var email = document.getElementById("emailValue").value;
  var textField = document.getElementById("emailTextField");
  var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  if (email.match(pattern)) {
    signinForm.classList.add("valid");
    signinForm.classList.remove("invalid");
    textField.innerHTML = "Your Email is Valid";
    textField.style.color = "#00ff00";
  } else {
    signinForm.classList.remove("valid");
    signinForm.classList.add("invalid");
    textField.innerHTML = "Your Email is invalid ";
    textField.style.color = "#ff0000";
  }
}

function signupNavigation() {
  //signupNavigation
  var loginPage = document.getElementById("loginPageContainer"); //signinContainer
  var signuppage = document.getElementById("signupPageContainer"); //signupContainer

  var signupStyle = window.getComputedStyle(signuppage);

  if (signupStyle.display === "none") {
    loginPage.style.display = "none";
    signuppage.style.display = "block";
  }
}

function signinNavigation() {
  //signinNavigation

  var login = document.getElementById("loginPageContainer"); //signinContainer
  var signup = document.getElementById("signupPageContainer"); //signupContainer

  var signinStyle = window.getComputedStyle(login);

  if (signinStyle.display === "none") {
    login.style.display = "block";
    signup.style.display = "none";
  }
}
