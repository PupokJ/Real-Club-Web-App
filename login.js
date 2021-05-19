//Signin
const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const signUpEmail = document.querySelector("#user").value;
  const signUpPassword = document.querySelector("#pass").value;

  auth
    .signInWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((userCredential) => {
      console.log("signin");
      window.location.replace("./vistaCliente.html");
    });
});
