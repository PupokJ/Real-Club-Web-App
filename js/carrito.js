auth.onAuthStateChanged((user) => {
  if (user) {
    var content = [];
    const setCantidad = (cantidad) => fs.collection("users-info")
    .doc(user.uid)
    .collection("carrito")
    .doc()
    fs.collection("users-info")
      .doc(user.uid)
      .collection("carrito")
      .get()
      .then((snapshot) => {
        let i = 0;
        snapshot.forEach((doc) => {
          const producto = doc.data();
          producto.pid = doc.id;
          console.log(producto);
          app.products.push(producto);
        });
        app.renderTemplates();
        app.setProductImages();
        app.attachEvents();
        app.updateTotals();
      });
  }
});
