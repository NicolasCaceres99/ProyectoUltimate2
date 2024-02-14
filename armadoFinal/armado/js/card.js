const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//  -- flecha derecha --//
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// -- flecha izquierda -- //
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// -- Paginacion -- //
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// -- Hover -- //
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

// -- Buscador -- //

let movies = [
    'thor',
    'spiderman',
    'iron man',
    'batman',
    'venom',
    'avengers',
    'wandavision',
    'hulk',
    'thanos'
];

function buscar() {
    let buscador = document.getElementById('buscador').value;
    let resultados = [];

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].toLocaleLowerCase().includes(buscador.toLocaleLowerCase())) {
            resultados.push(movies[i]);
        }
    }

    let resultadosList = document.getElementById('resultados');
    resultadosList.textContent = '';

    if (resultados.length > 0) {
        for (let i = 0; i < resultados.length; i++) {
            let li = document.createElement('li');
            li.textContent = resultados[i];
            resultadosList.appendChild(li);
        }
    }
}