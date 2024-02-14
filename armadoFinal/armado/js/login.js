class registro {
    constructor(nombre,password){
    this.nombre = nombre
    this.password = password
    }
}

let boton = document.getElementById('enviar')
boton.addEventListener('click',enviar)


let personas;
function enviar (){
    let nombre = document.getElementById('nombre').value 
    let password= document.getElementById('password').value

    personas = new registro (nombre,password)

    localStorage.setItem('llave',JSON.stringify(personas))
    let llave = JSON.parse(localStorage.getItem(personas))
}