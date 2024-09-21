// ========POPUP========

import { productoActivo, setproductoActivo } from "../../main";


const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', ()=>{
    handleCancelButton(); 
})

const handleCancelButton =()=>{
    closeModal();
}

// FUNCIONES ABRIR C ERRAR MODAL
export const openModal = () =>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";

    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        categoria.value = productoActivo.categoria;
        precio.value = productoActivo.precio ;
        nombre.value = productoActivo.nombre;
    };


}
export const closeModal = () =>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
}
const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    imagen.value = "";
    categoria.value = "Seleccione una categoria";
    precio.value = 0;
    nombre.value = "";
};  