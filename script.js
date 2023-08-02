// alert("hello")
// Obtener el div principal
const divPrincipal = document.getElementById('mainPrincipal');

// Crear el formulario
const formulario = document.createElement('form');

// Crear el input
const input = document.createElement('input');
input.type = 'text';

// Crear los dos botones
const botonAnadir = document.createElement('button');
botonAnadir.textContent = 'Añadir';
const botonLimpiar = document.createElement('button');
botonLimpiar.textContent = 'Limpiar';

// Crear la lista desordenada para mostrar los elementos añadidos
const lista = document.createElement('ul');

// Añadir los elementos al formulario
formulario.appendChild(input);
formulario.appendChild(botonAnadir);
formulario.appendChild(botonLimpiar);
divPrincipal.appendChild(formulario);
divPrincipal.appendChild(lista);

// Evento para añadir elementos a la lista
botonAnadir.addEventListener('click', (event)=> {
    event.preventDefault();

  const texto = input.value.trim();
  if (texto !== '') {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function() {
      lista.removeChild(elementoLista);
    });

    elementoLista.appendChild(botonEliminar);
    lista.appendChild(elementoLista);

    input.value = '';
  }
});

// Evento para limpiar el input
botonLimpiar.addEventListener('click', function() {
  input.value = '';
});
