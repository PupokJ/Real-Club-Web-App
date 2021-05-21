const logout = document.querySelector("#logout");
const nombre = document.querySelector(".sname");
const code = document.querySelector(".scode");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("signout");
  });
});

//events
//list for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection("users-info")
      .doc(user.uid)
      .get()
      .then((snapshot) => {
        nombre.innerHTML = snapshot.data().name;
        code.innerHTML = snapshot.data().memberCode;
      });
  } else {
    console.log("signout");
    window.location = "index.html";
  }
});
