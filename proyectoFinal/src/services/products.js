//=======PRODUCTOS========

import { setInLocalStorage } from "../persistence/localstorage";
import { closeModal, openModal } from "../views/modal";
import { handleGetProductToStore } from "../views/store";


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
        let object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio, 
            categoria,
        }
    }
    setInLocalStorage(object);
    handleGetProductToStore();
    closeModal();


}

