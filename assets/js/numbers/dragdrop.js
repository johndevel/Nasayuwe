let modal = document.getElementById("popup1");
// @desciption for user to play Again 
function playAgain(){
  modal.classList.remove("show");
  // startGame();
  location.reload();
}

document.onreadystatechange = () => {
  // declare modal
  let modal = document.getElementById("popup1");
  // close icon in modal
  let closeicon = document.querySelector(".close");
  

  if (document.readyState === 'complete') {
    // document ready reset sessionCount
    resetCount();

    const draggableElements = document.querySelectorAll(".draggable");
    const droppableElements = document.querySelectorAll(".droppable");

    draggableElements.forEach(elem => {
      elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
      // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
      // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
    });

    droppableElements.forEach(elem => {
      elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
      elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
      elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
      elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
    });

    const reload = document.getElementById('reload');

    reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
        location.reload();
        resetCount();
    });

    // Drag and Drop Functions

    //Events fired on the drag target

    function dragStart(event) {
      event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
    }

    //Events fired on the drop target

    function dragEnter(event) {
      if(!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
      }
    }

    function dragOver(event) {
      if(!event.target.classList.contains("dropped")) {
        event.preventDefault(); // Prevent default to allow drop
      }
    }

    function dragLeave(event) {
      if(!event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover");
      }
    }

    function countWin() {
        // Si existe contador se incrementa y sino se inicializa
        if (sessionStorage.count) {
            // Se convierte el contador a entero porque por defecto es una cadena
            sessionStorage.count = parseInt(sessionStorage.count) + 1;
            if (sessionStorage.count >= 5) {
                const win = document.querySelector(".win");
                win.play();
                resetCount();
                // show congratulations modal
                modal.classList.add("show");

                //closeicon on modal
                closeModal();
            }
        } else {
            sessionStorage.count = 1;
        }
        // document.getElementById("count").value = sessionStorage.count + "  Wins";
    }

    function closeModal(){
      closeicon.addEventListener("click", function(e){
          modal.classList.remove("show");
          // startGame();
      });
    }

    function resetCount() {
        sessionStorage.removeItem("count");
    }

    function drop(event) {
      event.preventDefault(); // This is in order to prevent the browser default handling of the data
      event.target.classList.remove("droppable-hover");
      const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
      const droppableElementData = event.target.getAttribute("data-draggable-id");  
      const isCorrectMatching = draggableElementData === droppableElementData;
      if(isCorrectMatching) {
        const one = document.querySelector(".one");
        const two = document.querySelector(".two");
        const three = document.querySelector(".three");
        const four = document.querySelector(".four");
        const five = document.querySelector(".five");
        const six = document.querySelector(".six");
        const seven = document.querySelector(".seven");
        const eight = document.querySelector(".eight");
        const nine = document.querySelector(".nine");
        const ten = document.querySelector(".ten");
        const draggableElement = document.getElementById(draggableElementData);
        event.target.classList.add("dropped");
        // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
        event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        // event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);     
        event.target.insertAdjacentHTML("afterbegin", `<img src="../../assets/images/modules/numbers/${draggableElementData}80x80.png" alt="">`);
        const audio = {
            one: one,
            two: two,
            three: three,
            four: four,
            five: five,
            six: six,
            seven: seven,
            eight: eight,
            nine: nine,
            ten: ten,
        }
        const draggData = audio[draggableElementData]; 

        draggData.play();
        countWin();
      }
      else
      {
        const wrong = document.querySelector(".wrong");
        wrong.play();
      }
    }
  }
};