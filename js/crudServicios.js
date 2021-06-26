const productContainer = document.getElementById("crud-tbody");
const editForm = document.getElementById("editForm");
const deleteForm = document.getElementById("deleteForm");
const modalTitle = document.getElementById("modal-title-form");
const addProduct = document.getElementById("add-product");
let editStatus = false;
let id = "";

const saveTask = (
  nombre,
  precio,
  descripcion,
  categoria,
  imagepath,
  stock,
  material
) =>
  fs.collection("courses").doc().set({
    nombre,
    precio,
    descripcion,
    categoria,
    imagepath,
    stock,
    material,
  });

const getProductos = () => fs.collection("courses").get();
const onGetTasks = (callback) => fs.collection("courses").onSnapshot(callback);
const deleteTask = (id) => fs.collection("courses").doc(id).delete();
const getTask = (id) => fs.collection("courses").doc(id).get();
const updateTask = (id, updatedTask) =>
  fs.collection("courses").doc(id).update(updatedTask);

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    productContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const producto = doc.data();
      productContainer.innerHTML += `
	  <tr>
	  <td>${producto.nombre}</td>
	  <td>S/.${producto.precio}</td>
    <td>${producto.profesor}</td>
	  <td class="desc-table">${producto.descripcion}</td>
	  <td>${producto.categoria}</td>
	  <td><img class="img-table" src="${producto.imagepath}"></td>
	  <td>${producto.stock}</td>
	  <td>
	  	<button class="btn btn-primary btn-delete" data-toggle="modal" data-target="#deleteEmployeeModal" data-id="${doc.id}">
		  🗑 Delete
		</button>
		<button class="btn btn-secondary btn-edit" data-toggle="modal" data-target="#editEmployeeModal" data-id="${doc.id}">
		  🖉 Edit
		</button>
	  </td>
  </tr> `;
    });
    addProduct.addEventListener("click", (e) => {
      editForm.reset();
      editStatus = false;
      id = "";
      modalTitle.innerHTML = `Agregando Producto`;
      editForm["btn-task-form"].value = "Agregar Producto";
    });
    const btnsDelete = productContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          id = doc.id;
        } catch (error) {
          console.log(error);
        }
        console.log(e.target.dataset.id);
      })
    );

    const btnsEdit = productContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const producto = doc.data();
          editForm["nombre"].value = producto.nombre;
          editForm["precio"].value = producto.precio;
          editForm["descripcion"].value = producto.descripcion;
          editForm["categoria"].value = producto.categoria;
          editForm["imagepath"].value = producto.imagepath;
          editForm["stock"].value = producto.stock;
          editForm["material"].value = producto.profesor;

          editStatus = true;
          id = doc.id;
          modalTitle.innerHTML = `Editando Servicio`;
          editForm["btn-task-form"].value = "Actualizar Servicio";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = editForm["nombre"];
  const precio = editForm["precio"];
  const descripcion = editForm["descripcion"];
  const categoria = editForm["categoria"];
  const imagepath = editForm["imagepath"];
  const stock = editForm["stock"];

  try {
    if (!editStatus) {
      await saveTask(
        nombre.value,
        precio.value,
        descripcion.value,
        categoria.value,
        imagepath.value,
        stock.value,
        material.value
      );
    } else {
      await updateTask(id, {
        nombre: nombre.value,
        precio: precio.value,
        descripcion: descripcion.value,
        categoria: profesor.value,
        imagepath: imagepath.value,
        stock: stock.value,
        material: material.value,
      });
      editForm.reset();
      editStatus = false;
      id = "";
    }
    location.reload();
  } catch (error) {
    console.log(error);
  }
});
deleteForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await deleteTask(id);
    id = "";
  } catch (error) {
    console.log(error);
  }

  location.reload();
});
