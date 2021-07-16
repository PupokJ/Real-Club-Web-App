const productContainer = document.getElementById("product-list");
const getProductos = () => fs.collection("products").get();
const getTask = (id) => fs.collection("products").doc(id).get();
let uid = "";
auth.onAuthStateChanged((user) => {
  uid = user.uid;
});
//name, price, desc, img
const saveCarrito = (id,name, price, desc, img) =>
  fs.collection("users-info").doc(uid).collection("carrito").doc(id).set({
    name, price, desc, img,cantidad:"1"
  });
window.addEventListener("DOMContentLoaded", async (e) => {
  const querySnapshot = await getProductos();
  querySnapshot.forEach((doc) => {
    const producto = doc.data();
    productContainer.innerHTML += `<div class="col-md-4 product-item" category="${producto.categoria}">
    <section class="panel">
        <div class="pro-img-box">
            <img src="${producto.imagepath}" alt="" />
            <a href="" class="adtocart" data-id="${doc.id}">
                <i class="fa fa-shopping-cart">🛒</i>
            </a>
        </div>

        <div class="panel-body text-center">
            <h4>
                <a href="./DetallePdto.html" class="pro-title">
                    ${producto.nombre}
                </a>
            </h4>
            <p class="price">S/.${producto.precio}</p>
            <p style="color: green;">Stock: ${producto.stock}</p>
            <p style="color: #139DEE;">Material: ${producto.material}</p>
        </div>
    </section>
</div>`;
  });
  const adtocart = productContainer.querySelectorAll(".adtocart");
  adtocart.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      try {
        e.preventDefault();
        console.log(e.target.dataset);
        const docb = await getTask(e.target.dataset.id);
        const producto = docb.data();
        let name = producto.nombre;
        let price = producto.precio;
        let desc = producto.descripcion;
        let img = producto.imagepath;
        console.log(docb.id,name, price, desc, img);
        saveCarrito(docb.id,name, price, desc, img);
      } catch (error) {
        console.log(error);
      }
    });
  });
});
