fetch('autores.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('authorsContainer');
    data.forEach(autor => {
      const card = document.createElement('div');
      card.className = 'author-card';

      card.innerHTML = `
        <div class="image-wrapper">
            <img src="${autor.imagen}" alt="${autor.nombre}">
        </div>
        <h3>${autor.nombre}</h3>
        <p>${autor.descripcion}</p>
        `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error cargando autores:', error));
