function cerrar_sesion(elemento){
//console.log(elemento.innerText);
    if(elemento.innerText =="Iniciar Sesión"){
        elemento.innerText = "Cerrar Sesión"
    }
    else{elemento.innerText ="Iniciar Sesión"}
};

function eliminar_elemento(elemento){
    elemento.remove();
};

let like=document.querySelector(".contador1").innerText;
let item=document.querySelector(".nombre").innerText;
function me_gusta() {
    like++;
    let numero= document.querySelector(".contador1");
    numero.innerText=like;
    alert(`${item} was liked.`);
}

let like1=document.querySelector(".contador2").innerText;
let item1=document.querySelector(".nombre1").innerText;

function me_gusta1() {
    like1++;
    let numero= document.querySelector(".contador2");
    numero.innerText=like1;
    alert(`${item1} was liked.`);
}
