//=======PRODUCTOS========
import Swal  from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal, openModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";


//guardamos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyElements(); 
    
});
//funcion de guardar
const handleSaveOrModifyElements = () =>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;
    let object = null; 
    if(productoActivo){
        object = {
        ...productoActivo,
        nombre,
        imagen,
        precio, 
        categoria,
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio, 
            categoria,
        }
    }
    Swal.fire({
        position: "center",
        icon: "Correcto",
        title: "Producto guardado correctamente!",
        showConfirmButton: false,
        timer: 1500
    });
    setInLocalStorage(object);
    handleGetProductToStore();
    closeModal();
}



export const handleDeleteProduct = ()=>{ 
    //Eleminar 
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "¿Desea eliminar elemento?",
    text: "¡Si lo elimina será permanetemente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "No, cancelar",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
        const products = handleGetProductLocalStorage();
        const result = products.filter((el)=> el.id !== productoActivo.id);
        //setear el nuebvo array
        localStorage.setItem('products', JSON.stringify(result));    
        const newProducts = handleGetProductLocalStorage();
        handleRenderList(newProducts); 
        closeModal();
    
    } else {
        closeModal();
    }
});
}

