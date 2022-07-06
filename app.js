window.confirm("Bienvenido");

const btnInfo = document.getElementById("btnInfo");

cargarEventos();
function cargarEventos(){
    btnInfo.addEventListener("click",()=>{
        alert("Hello Again")
    })
}