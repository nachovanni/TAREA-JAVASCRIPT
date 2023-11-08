var imagenes = ['images/akita-2538276_1280.jpg', 'images/boat.jpg', 'images/helicopter.jpg', 'images/nature.jpg'];
var indiceActual = 0;

document.getElementById('anterior').addEventListener('click', function () {
    indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
    document.getElementById('imagenCarrusel').src = imagenes[indiceActual];
});

document.getElementById('siguiente').addEventListener('click', function () {
    indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
    document.getElementById('imagenCarrusel').src = imagenes[indiceActual];
});

document.getElementById('increase-btn').addEventListener('click', function () {
    var textElement = document.getElementById('text');
    var fontSize = window.getComputedStyle(textElement).fontSize;
    var currentSize = parseFloat(fontSize);
    textElement.style.fontSize = (currentSize + 2) + 'px';
});

document.getElementById('decrease-btn').addEventListener('click', function () {
    var textElement = document.getElementById('text');
    var fontSize = window.getComputedStyle(textElement).fontSize;
    var currentSize = parseFloat(fontSize);
    textElement.style.fontSize = (currentSize - 2) + 'px';
});

var foldersContainer = document.getElementById('folders-container');
var folderData = [
  { title: 'Carpeta 1', details: 'Detalles de la Carpeta 1' },
  { title: 'Carpeta 2', details: 'Detalles de la Carpeta 2' },
  { title: 'Carpeta 3', details: 'Detalles de la Carpeta 3' }
];

folderData.forEach(function(data) {
  var folder = document.createElement('div');
  folder.classList.add('folder');

  var title = document.createElement('div');
  title.classList.add('title');
  title.textContent = data.title;

  var details = document.createElement('div');
  details.classList.add('details');
  details.textContent = data.details;

  folder.appendChild(title);
  folder.appendChild(details);

  folder.addEventListener('click', function() {
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  });

  foldersContainer.appendChild(folder);
});