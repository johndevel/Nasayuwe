const popup = document.querySelector('.popup');
const spanish = document.getElementById('spanish');
const nasa = document.getElementById('nasa');

var close = document.getElementById("close");
close.addEventListener("click", () => {
    popup.classList.remove('active');
});  

function clickaction( b ){
	switch( b.id ){
        case "cabello":
            const cabello = document.querySelector(".cabello");
            cabello.play();
            
            popup.classList.add('active');
            spanish.innerHTML = ` Cabello`;
            nasa.innerHTML = ` Jxkhaas`;
            break;
	    case "ojo":
	    case "ojodos":
            const ojos = document.querySelector(".ojos");
            ojos.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Ojo`;
            nasa.innerHTML = ` Yafx`;
            break;
	    case "nariz":
            const nariz = document.querySelector(".nariz");
            nariz.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Nariz`;
            nasa.innerHTML = ` ïç`;
            break;
        case "oreja":
	    case "orejados":
            const oreja = document.querySelector(".orejas");
            oreja.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Oreja`;
            nasa.innerHTML = ` Thu'wë`;
            break;
        case "boca":
            const boca = document.querySelector(".boca");
            boca.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Boca`;
            nasa.innerHTML = ` Yuwe`;
            break;
        case "cuello":
            const cuello = document.querySelector(".cuello");
            cuello.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Cuello`;
            nasa.innerHTML = ` Txhik`;
            break;
        case "hombro":
	    case "hombrodos":
            const hombros = document.querySelector(".hombros");
            hombros.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Hombro`;
            nasa.innerHTML = ` Bab`;
            break;
        case "brazo":
	    case "brazodos":
            const brazo = document.querySelector(".brazos");
            brazo.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Brazo`;
            nasa.innerHTML = ` Ku'ta`;
            break;
        case "mano":
	    case "manodos":
            const mano = document.querySelector(".manos");
            mano.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Mano`;
            nasa.innerHTML = ` Kuse`;
            break;   
        case "pierna":
	    case "piernados":
            const pierna = document.querySelector(".piernas");
            pierna.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Pierna`;
            nasa.innerHTML = ` Ji'be`;
            break;
        case "pie":
	    case "piedos":
            const pie = document.querySelector(".pies");
            pie.play();

            popup.classList.add('active');
            spanish.innerHTML = ` Pie`;
            nasa.innerHTML = ` Çxida`;
            break;
    }
}