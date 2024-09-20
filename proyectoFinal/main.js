import { renderCategories } from "./src/services/categories";
import './style.css';
renderCategories();
// ========product========

const buttonAdd = document.getElementById("header_buttonAdd");
buttonAdd.addEventListener('click', ()=>{
    openModal();  
})


// ========POPUP========

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', ()=>{
    handleCancelButton(); 
})

const handleCancelButton =()=>{
    closeModal()
}
// FUNCIONES ABRIR CERRAR MODAL
const openModal = () =>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
}
const closeModal = () =>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
}
 
// GUARDAR O MODIFICAR ELEMENTOS
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', ()=>{
    hanldeSaveOrModifyElements(); 
})


const hanldeSaveOrModifyElements = () =>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;
    console.log({
        nombre,
        imagen,
        precio, 
        categoria
    })
    closeModal();
}