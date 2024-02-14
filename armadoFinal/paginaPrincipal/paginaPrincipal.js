let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = document = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i = currentItem1; i < currentItem1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 +=4;
    if(currentItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none'
    }
}


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