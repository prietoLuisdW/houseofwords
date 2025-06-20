document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetch("../json/gabriel.json").then(res => res.json());
  
    // Insertar datos del autor
    document.getElementById("nombre-autor").textContent = data.autor.nombre;
    document.getElementById("biografia").textContent = data.autor.biografia;
    document.querySelector(".foto img").src = data.autor.foto;
  
    const listaCuentos = document.getElementById("lista-cuentos");
  
    data.cuentos.forEach((cuento, index) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "cuento-tarjeta";
  
      const header = document.createElement("div");
      header.className = "cuento-header";
      header.innerHTML = `<span>${cuento.titulo}</span><span class="toggle">+</span>`;
      tarjeta.appendChild(header);
  
      const texto = document.createElement("div");
      texto.className = "cuento-texto";
      texto.innerHTML = cuento.texto;
      tarjeta.appendChild(texto);
  
      // Evento de click para expandir/colapsar
      header.addEventListener("click", () => {
        const abiertos = document.querySelectorAll(".cuento-tarjeta.abierto");
        abiertos.forEach(t => {
          if (t !== tarjeta) {
            t.classList.remove("abierto");
            t.querySelector(".toggle").textContent = "+";
          }
        });
  
        const abierto = tarjeta.classList.toggle("abierto");
        header.querySelector(".toggle").textContent = abierto ? "−" : "+";
      });
  
      listaCuentos.appendChild(tarjeta);
    });
  });
  