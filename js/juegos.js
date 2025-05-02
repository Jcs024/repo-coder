const juegos = [
    {
      titulo: "EA SPORTS FC 25 Standard Edition Código de XBOX LIVE",
      precio: "25",
      imagen: "../img/2_3/img_juegos/fc25_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "God of War Ragnarök (PC) Código de Steam GLOBAL",
      precio: "50",
      imagen: "../img/2_3/img_juegos/gowr_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "HELLDIVERS 2 (PC) Código de Steam GLOBAL",
      precio: "34",
      imagen: "../img/2_3/img_juegos/hd2_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Minecraft: Java & Bedrock Edition (PC) Official website Key GLOBAL",
      precio: "16",
      imagen: "../img/2_3/img_juegos/mc_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Assassin’s Creed Shadows (PC) Código de Ubisoft Connect GLOBAL",
      precio: "60",
      imagen: "../img/2_3/img_juegos/acs_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Avowed (PC/Xbox Series) Código de XBOX LIVE GLOBAL",
      precio: "65",
      imagen: "../img/2_3/img_juegos/avowed_2_3.png",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Sid Meier's Civilization® VII (PC) Código de Steam GLOBAL",
      precio: "15",
      imagen: "../img/2_3/img_juegos/civ7_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "The Last of Us™ Part II Remastered (PC) Steam Key ROW",
      precio: "45",
      imagen: "../img/2_3/img_juegos/loup2r_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Monster Hunter Wilds Premium Deluxe Edition (PC)",
      precio: "85",
      imagen: "../img/2_3/img_juegos/mhw_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Red Dead Redemption 2 Rockstar Games Launcher Clave GLOBAL",
      precio: "16",
      imagen: "../img/2_3/img_juegos/rdr2_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Call of Duty®: Black Ops 6",
      precio: "50",
      imagen: "../img//2_3/img_juegos/codbo6_2_3.jpg",
      link: "comprar.html?juego=fc25"
    },
    {
      titulo: "Diablo® IV XBOX LIVE Key",
      precio: "26",
      imagen: "../img/2_3/img_juegos/db4_2_3.jpg",
      link: "comprar.html?juego=fc25"
    }
  ];
  
  const contenedor = document.getElementById("contenedor-juegos");

for (let i = 0; i < juegos.length; i += 4) {
  const grupo = juegos.slice(i, i + 4);

  const seccion = document.createElement("div");
  seccion.className = "pr_jg";

  grupo.forEach(juego => {
    const enlace = document.createElement("a");
    enlace.href = juego.link;

    const tarjeta = document.createElement("div");
    tarjeta.className = "img_jg";

    tarjeta.innerHTML = `
      <img src="${juego.imagen}" alt="${juego.titulo}">
      <h4>${juego.titulo}</h4>
      <p class="precio">${juego.precio} USD</p>
      <p class="comprar">COMPRAR</p>
    `;

    enlace.appendChild(tarjeta);
    seccion.appendChild(enlace);
  });

  contenedor.appendChild(seccion);
}