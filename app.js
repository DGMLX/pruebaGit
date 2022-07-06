window.confirm("Bienvenido");

const btnInfo = document.getElementById("btnInfo");
const btnAceptar = document.querySelectorAll(".btnAceptar")
const btnEliminar = document.querySelectorAll(".btnEliminar")

cargarEventos();
function cargarEventos(){
    btnInfo.addEventListener("click",()=>{
        alert("Información....")
    })
    
    btnAceptar.forEach(elemento=>{
        console.log(elemento);
        elemento.addEventListener("click",e=>{
            alert("Aceptando...")
            console.log(e.target)
        })

    })

    btnEliminar.forEach(elemento=>{
        console.log(elemento);
        elemento.addEventListener("click",e=>{
            alert("Eliminando...")
            console.log(e.target)
        })

    })
}

