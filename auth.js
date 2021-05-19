const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const signUpEmail = document.querySelector("#form-email").value;
  const signUpPassword = document.querySelector("#form-pass").value;

  auth
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((userCredential) => {
      console.log("signup");
    });
});
//Validacion
var check = function () {
  if (
    document.getElementById("form-pass").value ==
    document.getElementById("form-pass-confirm").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "V&aacute;lido";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML =
      "Las contraseñas no coinciden";
  }
};
