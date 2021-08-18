$(document).ready(function() {
  $("#btn-drop").click(function() {
    $("#btn-drop").toggleClass("drop-rotate");    
    let style = $('#drop-descripcion').css('max-height');
    $("#drop-descripcion").toggleClass("drop-active");
    if (style == '0px') {
      let heightCardDescription = $(".drop-active").prop('scrollHeight');
      document.querySelector('.drop-active').style.setProperty('--max-height', heightCardDescription +'px');
    }    
  });

  $("#btn-drop-two").click(function() {
    $("#btn-drop-two").toggleClass("drop-rotate");
    let styleTwo = $('#drop-descripcion-two').css('max-height');
    $("#drop-descripcion-two").toggleClass("drop-active");
    if (styleTwo == '0px') {
      let heightCardDescriptionTwo = $(".drop-active").prop('scrollHeight');
      document.querySelector('.drop-active').style.setProperty('--max-height', heightCardDescriptionTwo +'px');
    }   
  });
});

