class Registro {
    constructor(nombre, correo, mensaje) {
        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje;
    }
}

let boton = document.getElementById('enviar');
boton.addEventListener('click', enviar);
let persona;

function enviar() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensage').value;

    persona = new Registro(nombre, correo, mensaje);

    localStorage.setItem('llave', JSON.stringify(persona));
    let llave = JSON.parse(localStorage.getItem(persona));

}
