const signUpForm = document.querySelector("#signup-form");

const saveForm = (uid, name, nick, phone, memberCode, gender) =>
  fs.collection("users").doc(uid).set({
    name,
    nick,
    phone,
    memberCode,
    gender,
  });

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = signUpForm["form-name"].value;
  const nick = signUpForm["form-nick"].value;
  const email = signUpForm["form-email"].value;
  const phone = signUpForm["form-phone"].value;
  const pass = signUpForm["form-pass"].value;
  const memberCode = signUpForm["form-member-code"].value;
  const gender = document.querySelector('input[type="radio"]:checked').value;

  auth.createUserWithEmailAndPassword(email, pass).then((userCredential) => {
    console.log("signup");
    const uid = userCredential.user.uid;
    saveForm(uid, name, nick, phone, memberCode, gender);
    signUpForm.reset();
    name.focus();
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
