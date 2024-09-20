//render de la vista vategorias

export const renderCategories = () =>{
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos elementos dentro de la lista
    ulList.innerHTML = `
    <li  id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosa">Gaseosa</li>
    <li id="MayorPrecio">MayorPrecio</li>
    <li id="MenorPrecio">MenorPrecio</li>
    `;
    //Añadimos dinamicamente el evento click
    const liElement = ulList.querySelectorAll("li");
    liElement.forEach((liElement)=>{
    liElement.addEventListener('click', ()=>{
        handleClick(liElement);
    }) 

    });
    //verficamos y manejamos el estilo del elemento activo
    const handleClick = (elemento)=>{
        liElement.forEach((el)=> {
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive");
            }else{
                if(elemento=== el){
                    el.classList.add("liActive");

                }
            }
        })
    }
    
}