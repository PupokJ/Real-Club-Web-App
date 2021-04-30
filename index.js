const db = firebase.firestore();
const taskForm = document.querySelector("#task-form");

var check = function () {
  if (
    document.getElementById("form-pass").value ==
    document.getElementById("form-pass-confirm").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "V&aacute;lido";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Las contraseñas no coinciden";
  }
};

const saveForm = (name, nick, email, phone, pass, memberCode, gender) =>
  db.collection("users").doc().set({
    name,
    nick,
    email,
    phone,
    pass,
    memberCode,
    gender,
  });

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = taskForm["form-name"];
  const nick = taskForm["form-nick"];
  const email = taskForm["form-email"];
  const phone = taskForm["form-phone"];
  const pass = taskForm["form-pass"];
  const memberCode = taskForm["form-member-code"];
  const gender = document.querySelector('input[type="radio"]:checked');

  await saveForm(
    name.value,
    nick.value,
    email.value,
    phone.value,
    pass.value,
    memberCode.value,
    gender.value
  );

  taskForm.reset();
  name.focus();
});
