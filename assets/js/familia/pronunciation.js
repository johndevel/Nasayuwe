const main = document.querySelector('main');

const data = [
  {
    image: '../../assets/images/modules/familia/abuela.png',
    name: "Abuela",
    text: "maluula"
  },
  {
    image: '../../assets/images/modules/familia/abuelo.png',
    name: "Abuelo",
    text: "taluul"
  },
  {
    image: '../../assets/images/modules/familia/mama.png',
    name: "Mamá",
    text: "mama"
  },
  {
    image: '../../assets/images/modules/familia/papa.png',
    name: "Papá",
    text: "tata"
  },
  {
    image: '../../assets/images/modules/familia/hija.png',
    name: "Hija",
    text: "nxiisa"
  },
  {
    image: '../../assets/images/modules/familia/hijo.png',
    name: "Hijo",
    text: "zxikh"
  },
  {
    image: '../../assets/images/modules/familia/primos.png',
    name: "Primos",
    text: "puukakhe dyaak"
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');
  const { image, name, text } = item;

  box.classList.add('box');

  box.innerHTML = `
    <img class="images" src="${image}" alt="${text}" />
    <p class="spanish">${name}</p>
    <p class="info nasa">${text}</p>
  `;

  box.addEventListener("click", () => {
    console.log(text);
    oneMessage(text);

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });  

  main.appendChild(box);
}

function oneMessage(text)
{
  const abuela = document.querySelector(".abuela");
  const abuelo = document.querySelector(".abuelo");
  const mama = document.querySelector(".mama");
  const papa = document.querySelector(".papa");
  const hija = document.querySelector(".hija");
  const hijo = document.querySelector(".hijo");
  const primos = document.querySelector(".primos");
  
  const audio = {
      maluula: abuela,
      taluul: abuelo,
      mama: mama,
      tata: papa,
      nxiisa: hija,
      zxikh: hijo, 
      "puukakhe dyaak": primos  
  }

  const familia = audio[text]; 
  familia.play();
}