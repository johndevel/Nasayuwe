const main = document.querySelector('main');

const data = [
  //{
   // image: '../../assets/images/modules/numbers/memory/zero1300x1300.png',
    //text: "zero"
  //},
  {
    image: '../../assets/images/modules/numbers/memory/one1300x1300.png',
    text: "teeçx"
  },
  {
    image: '../../assets/images/modules/numbers/memory/two1300x1300.png',
    text: "e’z"
  },
  {
    image: '../../assets/images/modules/numbers/memory/three1300x1300.png',
    text: "tekh"
  },
  {
    image: '../../assets/images/modules/numbers/memory/four1300x1300.png',
    text: "pahz"
  },
  {
    image: '../../assets/images/modules/numbers/memory/five1300x1300.png',
    text: "tahç"
  },
  //{
    //image: '../../assets/images/modules/numbers/memory/six1300x1300.png',
    //text: "six"
  //},
  //{
    //image: '../../assets/images/modules/numbers/memory/seven1300x1300.png',
    //text: "seven"
  //},
  //{
    //image: '../../assets/images/modules/numbers/memory/eight1300x1300.png',
    //text: "eight"
  //},
  //{
    //image: '../../assets/images/modules/numbers/memory/nine1300x1300.png',
    //text: 'nine'
  //},
  //{
    //image: '../../assets/images/modules/numbers/memory/ten1300x1300.png',
    //text: 'ten'
  //},
 // {
    //image: '../../assets/images/modules/numbers/memory/numbers1300x1300.png',
   // text: 'numbers'
  //}
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
  //const zero = document.querySelector(".zero");
  const one = document.querySelector(".teeçx");
  const two = document.querySelector(".e’z");
  const three = document.querySelector(".tekh");
  const four = document.querySelector(".pahz");
  const five = document.querySelector(".tahç");
  //const six = document.querySelector(".six");
  //const seven = document.querySelector(".seven");
  //const eight = document.querySelector(".eight");
  //const nine = document.querySelector(".nine");
  //const ten = document.querySelector(".ten");
  const numbers = document.querySelector(".numbers");

  const audio = {
    //zero: zero,
    teeçx: one,
    "e’z": two,
    tekh: three,
    pahz: four,
    tahç: five,
    //six: six,
    //seven: seven,
    //eight: eight,
    //nine: nine,
    //ten: ten,
    //numbers: numbers
  }

  const number = audio[text]; 
  number.play();
}