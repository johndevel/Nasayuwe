const main = document.querySelector('main');

const data = [
  {
    image: '../../assets/images/modules/colores/negro.png',
    text: "khũçx"
  },
  {
    image: '../../assets/images/modules/colores/rojo.png',
    text: "beh"
  },
  {
    image: '../../assets/images/modules/colores/blanco.png',
    text: "çxihme"
  },
  {
    image: '../../assets/images/modules/colores/amarillo.png',
    text: "çxkiitx"
  },
  {
    image: '../../assets/images/modules/colores/verde.png',
    text: "çenx"
  },
  {
    image: '../../assets/images/modules/colores/azul.png',
    text: "ẽeçenx"
  },
  {
    image: '../../assets/images/modules/colores/morado.png',
    text: "ka'ka kite"
  },
  {
    image: '../../assets/images/modules/colores/cafe.png',
    text: "sxuma"
  },
  {
    image: '../../assets/images/modules/colores/gris.png',
    text: "thu'me khuuç"
  },
  {
    image: '../../assets/images/modules/colores/rosado.png',
    text: 'wat'
  },
  {
    image: '../../assets/images/modules/colores/naranja.png',
    text: 'lem'
  },
  
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    oneMessage(text);

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

function oneMessage(text)
{
  const negro = document.querySelector(".negro");
  const rojo = document.querySelector(".rojo");
  const blanco = document.querySelector(".blanco");
  const amarillo = document.querySelector(".amarillo");
  const verde = document.querySelector(".verde");
  const azul = document.querySelector(".azul");
  const morado = document.querySelector(".morado");
  const cafe = document.querySelector(".cafe");
  const gris = document.querySelector(".gris");
  const rosado = document.querySelector(".rosado");
  const naranja = document.querySelector(".naranja");
  const audio = {

      khũçx: negro,
      beh: rojo,
      çxihme: blanco,
      çxkiitx: amarillo,
      çenx: verde,
      ẽeçenx: azul, 
      "ka'ka kite": morado,
      sxuma: cafe,
      "thu'me khuuç": gris,
      wat: rosado,
      lem: naranja
  }

  const colores = audio[text]; 
  colores.play();
}