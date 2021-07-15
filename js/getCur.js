const productContainer = document.getElementById("product-list");
const getProductos = () => fs.collection("courses").get();
window.addEventListener("DOMContentLoaded", async (e) => {
  const querySnapshot = await getProductos();
  querySnapshot.forEach((doc) => {
    const producto = doc.data();
    productContainer.innerHTML += `<div class="col-md-4 product-item" category="${producto.categoria}">
   
    <section class="panel">
    <div id="hover">
        <div class="pro-img-box">
           
                <img src="${producto.imagepath}" alt="" />
               
                <a href="./carrito.html" class="adtocart">
                    <i class="fa fa-shopping-cart">🛒</i>
                </a>
                </div> 
        </div>

        <div class="panel-body text-center">
            <h4>
                <a href="./DetallePdto.html" class="pro-title">
                    ${producto.nombre}
                </a>
            </h4>
            <p class="price">S/.${producto.precio}</p>
            <p style="color: green;">Cupos: ${producto.stock}</p>
            <p style="color: #139DEE;">Instructor: ${producto.profesor}</p>
        </div>
    </section>
</div>`
;
  });
});
