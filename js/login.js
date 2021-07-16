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
    });
});
//event
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    fs.collection("users-info")
      .doc(firebaseUser.uid)
      .get()
      .then((snapshot) => {
        if(snapshot.data().isAdmin){
          window.location = "dashboardAdmin.html";
        }else{
          window.location = "dashboardClient.html";
        }
      });
  }
});
