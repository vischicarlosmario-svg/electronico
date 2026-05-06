const ProductosPrueba = [
  {
    id: "1",
    nombreProducto: "Counter Strike 2",
    precio: "Gratis",
    descripcion_breve: "Durante más de dos décadas, Counter-Strike ha brindado una experiencia competitiva de élite...",
    descripcion_amplia: "Una actualización gratuita de CS:GO, Counter-Strike 2 es el salto técnico más grande...",
    categoria: "Shooter",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861"
  },
  {
    id: "2",
    nombreProducto: "Battlefield™ 6",
    precio: "$69.99 USD",
    descripcion_breve: "Libra una guerra sin cuartel con combate de infanteria...",
    descripcion_amplia: "Battlefield 6 es un videojuego de disparos en primera persona...",
    categoria: "Shooter",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2807960/c12d12ce3c7d217398d3fcad77427bfc9d57c570/header.jpg?t=1776359117"
  },
  {
    id: "3",
    nombreProducto: "Diablo IV",
    precio: "$39,99 USD",
    descripcion_breve: "Únete a la lucha por Santuario en Diablo IV...",
    descripcion_amplia: "Diablo IV es la experiencia RPG de acción definitiva...",
    categoria: "RPG",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3958690/extras/2c3163294577adf42edea776705057ff.avif?t=1777408963"
  },
  {
    id: "4",
    nombreProducto: "Rust",
    precio: "$30 USD",
    descripcion_breve: "El único objetivo en Rust es sobrevivir...",
    descripcion_amplia: "Rust comienza su 13.er año de expansión continua...",
    categoria: "Survival",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1776257232"
  },
  {
    id: "5",
    nombreProducto: "Resident Evil 4",
    precio: "$29,99 USD",
    descripcion_breve: "La supervivencia es solo el comienzo...",
    descripcion_amplia: "Leon S Kennedy rastrea a la hija del presidente...",
    categoria: "Accion",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1772502922"
  },
  {
    id: "6",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Minecraft es un videojuego de construcción de mundo abierto...",
    descripcion_amplia: "Crea lo que sea que puedas imaginar en tu propio mundo infinito...",
    categoria: "Sandbox",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg?t=1777351016"
  },
  {
    id: "7",
    nombreProducto: "Crimson Desert",
    precio: "$69,99 USD",
    descripcion_breve: "Juego de acción y aventura de mundo abierto...",
    descripcion_amplia: "Te convertirás en Kliff para recuperar lo perdido...",
    categoria: "Aventura",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3321460/abd7dbdeaede8b6c9a6d40bf116ff2b883f2dd45/header.jpg?t=1777016399"
  },
  {
    id: "8",
    nombreProducto: "Pragmata",
    precio: "$45,00 USD",
    descripcion_breve: "Juego de ciencia ficción de Capcom...",
    descripcion_amplia: "Acompaña a Hugh y Diana en una instalación lunar...",
    categoria: "Ciencia Ficcion",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg?t=1777351016"
  },

  // 👇 Los Minecraft repetidos los dejamos todos como Sandbox

  {
    id: "9",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Juego sandbox de construcción...",
    descripcion_amplia: "Crea mundos infinitos...",
    categoria: "Sandbox",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6CvNBjNv9sizrmGAmt-Nipj6e31SkQybH3e1UQWUjqshwCiXmwS_bcofVdZHLXGDrzEtcUwjpnxtnejKNKwkWCa6CpoXvFw3bVLF030&s=10"
  },
  {
    id: "10",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Juego sandbox de construcción...",
    descripcion_amplia: "Crea mundos infinitos...",
    categoria: "Sandbox",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6CvNBjNv9sizrmGAmt-Nipj6e31SkQybH3e1UQWUjqshwCiXmwS_bcofVdZHLXGDrzEtcUwjpnxtnejKNKwkWCa6CpoXvFw3bVLF030&s=10"
  },
  {
    id: "11",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Juego sandbox de construcción...",
    descripcion_amplia: "Crea mundos infinitos...",
    categoria: "Sandbox",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6CvNBjNv9sizrmGAmt-Nipj6e31SkQybH3e1UQWUjqshwCiXmwS_bcofVdZHLXGDrzEtcUwjpnxtnejKNKwkWCa6CpoXvFw3bVLF030&s=10"
  },
  {
    id: "12",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Juego sandbox de construcción...",
    descripcion_amplia: "Crea mundos infinitos...",
    categoria: "Sandbox",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6CvNBjNv9sizrmGAmt-Nipj6e31SkQybH3e1UQWUjqshwCiXmwS_bcofVdZHLXGDrzEtcUwjpnxtnejKNKwkWCa6CpoXvFw3bVLF030&s=10"
  },
  {
    id: "13",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Juego sandbox de construcción...",
    descripcion_amplia: "Crea mundos infinitos...",
    categoria: "Sandbox",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6CvNBjNv9sizrmGAmt-Nipj6e31SkQybH3e1UQWUjqshwCiXmwS_bcofVdZHLXGDrzEtcUwjpnxtnejKNKwkWCa6CpoXvFw3bVLF030&s=10"
  },
  {
    id: "14",
    nombreProducto: "Minecraft",
    precio: "$30 USD",
    descripcion_breve: "Juego sandbox de construcción...",
    descripcion_amplia: "Crea mundos infinitos...",
    categoria: "Sandbox",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6CvNBjNv9sizrmGAmt-Nipj6e31SkQybH3e1UQWUjqshwCiXmwS_bcofVdZHLXGDrzEtcUwjpnxtnejKNKwkWCa6CpoXvFw3bVLF030&s=10"
  }
];

export default ProductosPrueba;