$(document).ready(function(){
  'use strict';
  
  $(function(){
    $('.slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.slideshow :first-child').fadeOut(2000)
         .next('img').fadeIn(2000)
         .end().appendTo('.slideshow');}, 
      10000);
});

var slideshowInit = function() {
    var numberImages =  $('.slideshow img').length,
      currentImage = numberImages - 1,

      // Get current z-index for the slideshow and stack all images above this z-index
      zIndex = parseInt($('.slideshow').css('z-index')),
      currentZIndex = zIndex,
      
      // To play/pause the slideshow intervall
      intervallId = null;
      
    // Function to rotate images
    var rotateImages = function() {
      // Fade out current image and reorder z-index
      $('.slideshow img')
        .eq(currentImage)
        .fadeOut('slow', function() {
          $(this)
            .css('z-index', zIndex)
            .fadeIn(0)
            .siblings().each(function() {
              $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % numberImages + zIndex));
          });
        });
      currentImage = (numberImages + currentImage - 1) % numberImages;
      console.log('Rotating pictures in slideshow.' + currentImage);
    };
    
    // Fore each image, set it up.
    $('.slideshow img')
      .each(function() { 
        
        // Use i to set the z-index of the image, stack them on top of each other
        $(this)
          .css('z-index', currentZIndex++);
      })
   
    console.log("Slideshow was initiated.");
  };
  slideshowInit();
})