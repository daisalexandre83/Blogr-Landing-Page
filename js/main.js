$(document).on('click','.menu',function(e){
  e.stopPropagation();
 $('.menu').not($(this)).removeClass('active');
 $(this).toggleClass('active');
 console.log('oi')
});

$(document).on('click',function() {
 $('.menu').removeClass('active');
});

$(document).on('click','.menu-content',
 function(e){
   e.stopPropagation();
})


