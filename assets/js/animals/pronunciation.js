const main = document.querySelector('main');

const data = [
  {
    image: '../../assets/images/modules/animals/perro.png',
    text: "alku"
  },
  {
    image: '../../assets/images/modules/animals/cerdo.png',
    text: "kuçxi"
  },
  {
    image: '../../assets/images/modules/animals/caballo.png',
    text: "jiba"
  },
  {
    image: '../../assets/images/modules/animals/gato.png',
    text: "misx"
  },
  {
    image: '../../assets/images/modules/animals/vaca.png',
    text: "klaa u’y"
  },
  {
    image: '../../assets/images/modules/animals/toro.png',
    text: "klaa piçthẽ"
  },
  {
    image: '../../assets/images/modules/animals/gallina.png',
    text: "atalx u’y"
  },
  {
    image: '../../assets/images/modules/animals/gallo.png',
    text: "atalx pihç"
  },
  {
    image: '../../assets/images/modules/animals/pato.png',
    text: "yu’ẽs"
  },
  {
    image: '../../assets/images/modules/animals/cuy.png',
    text: 'fxiç'
  },
  {
    image: '../../assets/images/modules/animals/conejo.png',
    text: 'kahpx'
  },
  {
    image: '../../assets/images/modules/animals/paloma.png',
    text: 'tubkwe'
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
  const perro = document.querySelector(".perro");
  const cerdo = document.querySelector(".cerdo");
  const caballo = document.querySelector(".caballo");
  const gato = document.querySelector(".gato");
  const vaca = document.querySelector(".vaca");
  const toro = document.querySelector(".toro");
  const gallina = document.querySelector(".gallina");
  const gallo = document.querySelector(".gallo");
  const pato = document.querySelector(".pato");
  const cuy = document.querySelector(".cuy");
  const conejo = document.querySelector(".conejo");
  const paloma = document.querySelector(".paloma");
  const audio = {
      alku: perro,
      kuçxi: cerdo,
      jiba: caballo,
      misx: gato,
      "klaa u’y": vaca,
      "klaa piçthẽ": toro, 
      "atalx u’y": gallina,
      "atalx pihç": gallo,
      "yu’ẽs": pato,
      fxiç: cuy,
      kahpx: conejo,
      tubkwe: paloma
  }

  const animals = audio[text]; 
  animals.play();
}