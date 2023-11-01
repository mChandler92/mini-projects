
/*
$('#start').on('click', function() {
  alert('Here is your first question!');
  $('#start').css('visbility', 'visible')
  console.log("hi")
})
*/



$('.choice').hover(function() {
  $(this).css('background-color', 'gold').css('color', 'black')
}, 
  function() {
  $(this).css('background-color', 'steelblue').css('color', 'white')
})

// SELECTING CHOICE
$('.choice').on('click', function() {
  if ($(this).is('#o-4')) {
    $('.choice').off('mouseenter mouseleave')
    $(this).css('background-color', 'seagreen').css('color', 'white')
    $('.choice').not(this).css('text-decoration', 'line-through'). css('background', 'indianred')
    $('#msg-pos').fadeIn('fast').delay('slow').fadeOut('fast')
    /// LOGIC FOR DISABLING OTHER CHOICES
    $('.choice').off('click')
  } else {
    $(this).off('mouseenter mouseleave')
    $(this).css('background-color', 'indianred').css('color', 'black').css('text-decoration', 'line-through')
    $('#msg-neg').fadeIn('fast').delay('slow').fadeOut('fast')
    $('.choice').not(this).on('mouseenter mouseleave')
    // LOGIC FOR DISABLING INCORRECT ANSWER
   
  }
})





/*
('#o-4').on('click', function() {
    $(this).css('background-color', 'green').css('color', 'black')
    alert('Correct!')
})
*/