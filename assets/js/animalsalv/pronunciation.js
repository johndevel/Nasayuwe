const main = document.querySelector('main');

const data = [
  {
    image: '../../assets/images/modules/animalsalv/aguila.png',
    text: "u'h wala"
  },
  {
    image: '../../assets/images/modules/animalsalv/ardilla.png',
    text: "sxuma"
  },
  {
    image: '../../assets/images/modules/animalsalv/armadillo.png',
    text: "sxita"
  },
  {
    image: '../../assets/images/modules/animalsalv/borugo.png',
    text: "wawa"
  },
  {
    image: '../../assets/images/modules/animalsalv/cosumbo.png',
    text: "kãça"
  },
  {
    image: '../../assets/images/modules/animalsalv/culebra.png',
    text: "u'l"
  },
  {
    image: '../../assets/images/modules/animalsalv/guatin.png',
    text: "nxu'px"
  },
  {
    image: '../../assets/images/modules/animalsalv/oso.png',
    text: "e'sxavx"
  },
  {
    image: '../../assets/images/modules/animalsalv/pez.png',
    text: "wēdx"
  },
  {
    image: '../../assets/images/modules/animalsalv/venado.png',
    text: 'çxavx'
  }
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
  const aguila = document.querySelector(".aguila");
  const ardilla = document.querySelector(".ardilla");
  const armadillo = document.querySelector(".armadillo");
  const borugo = document.querySelector(".borugo");
  const cosumbo = document.querySelector(".cosumbo");
  const culebra = document.querySelector(".culebra");
  const guatin = document.querySelector(".guatin");
  const oso = document.querySelector(".oso");
  const pez = document.querySelector(".pez");
  const venado = document.querySelector(".venado");
  
  const audio = {
      "u'h wala": aguila,
      sxuma: ardilla,
      sxita: armadillo,
      wawa: borugo,
      kãça: cosumbo,
      "u'l": culebra, 
      "nxu'px": guatin,
      "e'sxavx": oso,
      wēdx: pez,
      çxavx: venado
      
  }

  const animals = audio[text]; 
  animals.play();
}