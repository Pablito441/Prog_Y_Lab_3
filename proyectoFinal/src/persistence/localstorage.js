// ========LOCAL STORAGE========
export const hanldeGetProductLocalStorage = () =>{
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
    let producsInLocal = hanldeGetProductLocalStorage();
    const existingIndex = producsInLocal.findIndex((productsLocal)=> productsLocal === productIn.id);


    //verificar si el elemeto existe

    if(existingIndex !== -1)  { 
        //si existe debe reeplazarte
        producsInLocal[existingIndex] = productIn;
    }else{
     //si no agregarse
        producsInLocal.push(productIn);
    }


    localStorage.setItem('products', JSON.parse(producsInLocal));    
}