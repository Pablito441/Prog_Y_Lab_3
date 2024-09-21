// ==========STORE==========

import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";
//funcion que se encarga de traer elementos y llamar al render

export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}
// se encarga de filtrar y de renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn)=>{
    //filtrado de arrays por categoria
    const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas")
    const papas = productosIn.filter((el) => el.categoria === "Papas")
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas")
    //funcion que renderiza los elemetnos de la seccion
    const renderProductGroup = (productos, title) =>{
        if(productos.length > 0 ){
            const productosHTML = productos.map((producto, index)=>{
                return `<div class="containerTargetItem" id='product-${producto.categoria}-${index}' >
                            <div>
                                <img src='${producto.imagen}'/>
                                <div >
                                    <h2>${producto.nombre}</h2>
                                </div>
                                <div class="targetProps">
                                    <p><b>Precio:</b> $${producto.precio}</p>
                                </div>
                            </div>
                        </div>`
            });
            // retorna la seccion con todos los elementos dentro
            return `
                <section class= 'sectionStore'>
                    <div class="containerTittleSection" >
                        <h3>${title}</h3>
                    </div>
                    <div class= 'containerProductStore'>${productosHTML.join("")}</div>
                </section>
            `
        }else{
            return ""
        }
    };
    //Renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers,"Hamburguesas")}
        ${renderProductGroup(papas,"Papas")}
        ${renderProductGroup(gaseosas,"Gaseosas")}
    `;
    //Se añaden los eventos de manera dinamica
    const addEvents = (productIn) => {
        if (productIn) {
            productIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                if (productContainer) {
                    productContainer.addEventListener("click", () => {
                        setproductoActivo(element); 
                        openModal();
                    });
                }
            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);


};