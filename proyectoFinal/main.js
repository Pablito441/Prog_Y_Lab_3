import { renderCategories } from "./src/services/categories";
import { hanldeSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css';

// APLICATION
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn
};

export let productoActivo = null;
export const setproductoActivo = (productoIn)=>{
    productoActivo = productoIn
};

handleGetProductToStore();
renderCategories();

//HEADER
const buttonAdd = document.getElementById("header_buttonAdd");
buttonAdd.addEventListener('click', ()=>{
    openModal();  
});

//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', ()=>{
    hanldeSearchProductByName();
    });

 