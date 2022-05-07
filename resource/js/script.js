$(document).ready(function() {
   /* for the sticky navigation*/
   $('.js--section-feature').waypoint(function(direction) {
      if(direction=="down")
       {
          $('nav').addClass('sticky');
        }
              else{
               $('nav').removeClass('sticky');
            }
        } , {
            offset:'60px;'
        });

/* Scroll to buttons */
$('.js--scroll-to-plans').click(function(){
   $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
});

$('.js--scroll-to-start').click(function(){
   $('html,body').animate({scrollTop:$('.js--section-feature').offset().top},1000);
});

/*navigation scroll */
$(function(){
   $('a[href*=#]').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
       && location.hostname == this.hostname) {
           var $target = $(this.hash);
           $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
           if ($target.length) {
               var targetOffset = $target.offset().left;
               $('html,body').animate({scrollLeft: targetOffset}, 1000);
               return false;
           }
       }
   });
}); 
$('.js--wp-1').waypoint(function(direction){
   $('.js--wp-1').addClass('animated fadeIn');
},
{
   offset: '50%'
});

});