$(function() {

   console.log("Hey there handsome! You're killing it today!");
// slider
   $('.bxslider').bxSlider({
      controls:false,
      minSlides:1,
      maxSlides:4,
      slideMargin: 0,
      auto: true,
      mode: 'horizontal'
   });
// pop-up alert for email
   $('.sign-up-form').on('submit', function(event) {

      event.preventDefault();

      var userEmail = $('input[name="new-email"]');

      if(userEmail.val().length !== 0 ) {
         alert('Thanks for subscribing!');
      } else {
         alert('Please enter a valid email address.');
      }
   });




});
