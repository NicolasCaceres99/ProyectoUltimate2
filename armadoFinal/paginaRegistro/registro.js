class registro {
    constructor(nombre,apellido,email,password){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.password = password
    }
}


let boton = document.getElementById('enviar')
boton.addEventListener('click',enviar)
let personas;

function enviar (){
    let nombre = document.getElementById('nombre').value 
    let apellido = document.getElementById('apellido').value
    let email = document.getElementById('email').value
    let password =document.getElementById('password').value

    personas = new registro(nombre,apellido,email,password)

localStorage.setItem('llave',JSON.stringify(personas))
let llave =JSON.parse(localStorage.getItem(personas))

}