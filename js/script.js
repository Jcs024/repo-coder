const carouseles = [
  {
    id: "carouselPopulares",
    juegos: [
      { titulo: "FC25", precio: "69.99", imagen: "fc25.jpg" },
      { titulo: "God of War Ragnarok", precio: "49.99", imagen: "gowr.jpg" },
      { titulo: "Helldivers 2", precio: "39.99", imagen: "hd2.jpg" },
      { titulo: "Minecraft", precio: "29.99", imagen: "mc.jpg" },
      { titulo: "Red Dead Redemption 2", precio: "59.99", imagen: "rdr2.jpg" }
    ],
    rutaImagen: "../img/16_9/jugado/"
  },
  {
    id: "carouselVendidos",
    juegos: [
      { titulo: "Call of Duty Black Ops 6", precio: "69.99", imagen: "codbo6_16_9.jpeg" },
      { titulo: "Diablo 4", precio: "49.99", imagen: "db4_16_9.jpg" },
      { titulo: "Grand Theft Auto V", precio: "14.99", imagen: "gta5_16_9.jpg" },
      { titulo: "Minecraft", precio: "29.99", imagen: "mc_16_9.jpg" },
      { titulo: "Palworld", precio: "14.99", imagen: "palworld_16_9.jpg" }
    ],
    rutaImagen: "./img/16_9/vend/"
  },
  {
    id: "carouselTarjetasRegalo",
    juegos: [
      { titulo: "Tarjetas de Regalo Fortnite", precio: "5 - 50 ", imagen: "fortnite_16_9.jpg" },
      { titulo: "Ps Plus Essential 3 meses", precio: "49.99", imagen: "ps_plus_16_9.jpg" },
      { titulo: "Tarjetas de Regalo Steam", precio: "1 - 50", imagen: "steam_regalo_16_9.webp" },
      { titulo: "Xbox Game Pass Ultimate 12 meses", precio: "120", imagen: "xbox_16_9.jpeg" },
      { titulo: "Tarjeta de Regalo Robux", precio: "5 - 50", imagen: "roblox_16_9.jpg" }
    ],
    rutaImagen: "./img/16_9/tarjreg/"
  },
  {
    id: "carouselProximosLanzamientos",
    juegos: [
      { titulo: "Assassins Creed Shadows", precio: "55.99", imagen: "acs.jpg" },
      { titulo: "Avowed", precio: "41.99", imagen: "avowed.jpeg" },
      { titulo: "Civilization VII", precio: "69.99", imagen: "civ7.png" },
      { titulo: "The Last of Us Part 2 Remake", precio: "39.99", imagen: "loup2r.jpeg" },
      { titulo: "Monster Hunter Wilds", precio: "52.49", imagen: "mhw.png" }
    ],
    rutaImagen: "./img/16_9/prox/"
  },
  {
    id: "carouselMenos5",
    juegos: [
      { titulo: "Hollow Knight", precio: "4.99", imagen: "hollow_knight.jpg" },
      { titulo: "Stardew Valley", precio: "4.99", imagen: "stardew_valley.png" },
      { titulo: "Buckshot Roulette", precio: "1.49", imagen: "buckshot_roulette.jpg" },
      { titulo: "Content Warning", precio: "4.49", imagen: "content_warning.jpg" },
      { titulo: "Backrooms: Escape Together", precio: "4.49", imagen: "backrooms.jpg" }
    ],
    rutaImagen: "../img/16_9/menos5usd/"
  },
  {
    id: "carouselMenos10",
    juegos: [
      { titulo: "The Headliners", precio: "4.49", imagen: "the_headliners.jpg" },
      { titulo: "Left 4 Dead 2", precio: "5.79", imagen: "left_4_dead_2.jpg" },
      { titulo: "Garry's Mod", precio: "5.79", imagen: "garrys_mod.jpg" },
      { titulo: "Dark Hours", precio: "5.79", imagen: "dark_hours.jpg" },
      { titulo: "Escape The Backrooms", precio: "5.79", imagen: "escape_the_backrooms.jpg" }
    ],
    rutaImagen: "../img/16_9/menos10usd/"
  }
];

function generarCarrusel({ id, juegos, rutaImagen }) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return;

  const inner = contenedor.querySelector('.carousel-inner');
  const indicators = contenedor.querySelector('.carousel-indicators');

  inner.innerHTML = "";
  indicators.innerHTML = "";

  juegos.forEach((juego, index) => {
    const active = index === 0 ? "active" : "";

    inner.innerHTML += `
      <div class="carousel-item ${active}">
        <img src="${rutaImagen}${juego.imagen}" class="d-block w-100" alt="${juego.titulo}">
        <a href="#" target="_blank">
          <div class="carousel-caption d-md-block texto_carousel">
            <h5>${juego.titulo}</h5>
            <p class="precio">${juego.precio} USD</p>
            <p class="comprar">COMPRAR</p>
          </div>
        </a>
      </div>
    `;

    indicators.innerHTML += `
      <button type="button" data-bs-target="#${id}" data-bs-slide-to="${index}" class="${active}" ${active ? 'aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>
    `;
  });
}

carouseles.forEach(generarCarrusel);
