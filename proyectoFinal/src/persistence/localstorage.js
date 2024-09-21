// ========LOCAL STORAGE========
export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    }else{
        return [];
    }
};

//  guardar en local storage

//recibir un producto
export const setInLocalStorage = (productIn) => {
    //traer todos los elementos
    let producsInLocal = handleGetProductLocalStorage();
    const existingIndex = producsInLocal.findIndex((productsLocal)=> productsLocal.id === productIn.id);


    //verificar si el elemeto existe

    if(existingIndex !== -1)  { 
        //si existe debe reeplazarte
        producsInLocal[existingIndex] = productIn;
    }else{
     //si no agregarse
        producsInLocal.push(productIn);
    }

    // setear el nuevo array
    localStorage.setItem('products', JSON.stringify(producsInLocal));    
}