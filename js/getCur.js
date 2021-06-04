const productContainer = document.getElementById("product-list");
const getProductos = () => fs.collection("courses").get();
window.addEventListener("DOMContentLoaded", async (e) => {
  const querySnapshot = await getProductos();
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    const producto = doc.data();
    productContainer.innerHTML += `<div class="col-md-4">
    <section class="panel">
        <div class="pro-img-box">
            <img src="${producto.imagepath}" alt="" />
            <a href="#" class="adtocart">
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
        </div>
    </section>
</div>`;
  });
});
