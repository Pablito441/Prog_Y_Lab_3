// const h1 = document.getElementById('h1element');
// let newtexto = "cambiado con javascript";
// // console.log(h1);
// // console.log(h1.innerHTML);

// h1.textContent = newtexto;

// const button = document. getElementById("button");

// // el botob se vuelve rojo y y despues normal 
// const handleStyleButton = ()=>{
//    if(
//     button.classList.contains("redbutton")
//    ){
//     button.classList.remove('redbutton');
//    }else{
    
//     button.classList.add('redbutton');
//    }
    
// }
// //cada vez que se hace click en el boton se manda el msj
// button.addEventListener("click",()=>{
//     console.log("el usuario hizo click");
//     handleStyleButton();
// })



const buttonInput = document.getElementById("buttonInputs");


const getDataInputs = () => {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    sessionStorage.setItem("datos",JSON.stringify({
        nombre,
        edad,
        email
    }))
    localStorage.setItem("datos",JSON.stringify({
        nombre,
        edad,
        email
    }))
};


buttonInput.addEventListener('click', ()=>{
    getDataInputs()
});


const buttonRecibir = document.getElementById("buttonRecibir").addEventListener("click",()=>{
    const result = localStorage.getItem("datos");
    const resultSession = sessionStorage.getItem("datos");
    console.log("Local")
    if(result){
        console.log(JSON.parse(result))
    }else{
        console.log("los datos no existen");
    }
    console.log("sesion")

    if(resultSession){
        console.log(JSON.parse(resultSession))
    }else{
        console.log("los datos no existen");
    }
})
