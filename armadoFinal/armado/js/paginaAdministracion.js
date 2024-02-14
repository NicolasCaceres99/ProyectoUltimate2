const movies = JSON.parse(localStorage.getItem('movies')) || [];

function displayMovies() {
    const tableBody = document.getElementById('movieTableBody');
    tableBody.innerHTML = '';

    movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.codigo}</td>
            <td>${movie.nombre}</td>
            <td>${movie.categoria}</td>
            <td>${movie.descripcion}</td>
            <td>${movie.publicado ? 'Sí' : 'No'}</td>
            <td>
                <button class="btn btn-link" onclick="deleteMovie(${movie.codigo})">
                    <img src="https://img.icons8.com/material/24/000000/delete.png" alt="Borrar">
                </button>
                <button class="btn btn-link" onclick="editMovie(${movie.codigo})">
                    <img src="https://img.icons8.com/material/24/000000/edit.png" alt="Editar">
                </button>
                <button class="btn btn-link" onclick="highlightMovie(${movie.codigo})">
                    <img src="https://img.icons8.com/material/24/000000/star.png" alt="Destacar">
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function openMovieModal(title, movie = null) {
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerText = title;

    const modalCodigo = document.getElementById('modalCodigo');
    const modalNombre = document.getElementById('modalNombre');
    const modalCategoria = document.getElementById('modalCategoria');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalPublicado = document.getElementById('modalPublicado');

    if (movie) {
        modalCodigo.value = movie.codigo;
        modalNombre.value = movie.nombre;
        modalCategoria.value = movie.categoria;
        modalDescripcion.value = movie.descripcion;
        modalPublicado.checked = movie.publicado;
    } else {
        modalCodigo.value = '';
        modalNombre.value = '';
        modalCategoria.value = '';
        modalDescripcion.value = '';
        modalPublicado.checked = false;
    }

    const modal = new bootstrap.Modal(document.getElementById('movieModal'));
    modal.show();
}

function closeMovieModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('movieModal'));
    modal.hide();
}

function saveMovie() {
    const codigo = document.getElementById('modalCodigo').value;
    const nombre = document.getElementById('modalNombre').value;
    const categoria = document.getElementById('modalCategoria').value;
    const descripcion = document.getElementById('modalDescripcion').value;
    const publicado = document.getElementById('modalPublicado').checked;

    const newMovie = {
        codigo,
        nombre,
        categoria,
        descripcion,
        publicado
    };

    const existingMovieIndex = movies.findIndex(movie => movie.codigo === codigo);

    if (existingMovieIndex !== -1) {
        movies[existingMovieIndex] = newMovie;
    } else {
        movies.push(newMovie);
    }

    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
    closeMovieModal();
}

function deleteMovie(codigo) {
    const indexToDelete = movies.findIndex(movie => movie.codigo === codigo);
    movies.splice(indexToDelete, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

function editMovie(codigo) {
    const movieToEdit = movies.find(movie => movie.codigo === codigo);
    openMovieModal('Editar Película/Serie', movieToEdit);
}

function highlightMovie(codigo) {
    movies.forEach(movie => {
        movie.destacada = false;
    });

    const movieToHighlight = movies.find(movie => movie.codigo === codigo);
    movieToHighlight.destacada = true;

    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

displayMovies();

document.getElementById('addMovieBtn').addEventListener('click', function () {
    openMovieModal('Agregar Nueva Película/Serie');
});

function toggleAdminItem() {
    const adminLink = document.getElementById('admin-link');
    const loginBtn = document.getElementById('loginBtn');

    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (isAdmin) {
        adminLink.style.display = 'block';
        loginBtn.style.display = 'none';
    } else {
        adminLink.style.display = 'none';
        loginBtn.style.display = 'block';
    }
}

function openAdminLoginModal() {
    $('#adminLoginModal').modal('show');
}

function loginAsAdmin() {
    var enteredPassword = document.getElementById('adminPassword').value;
    var correctPassword = 'kakashi0227';

    if (enteredPassword === correctPassword) {
        // Si la contraseña es correcta, realiza acciones de administrador
        alert('Inicio de sesión como administrador exitoso.');
        // Aquí puedes redirigir a la página de administrador o realizar otras acciones
    } else {
        alert('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
    }

    // Cierra el modal después del intento de inicio de sesión
    $('#adminLoginModal').modal('hide');
}