$(document).ready(function () {

  // Save button click event and function

  $('.saveBtn').on('click', function(){

    var input = $(this).siblings('.description').val();
    var timeSlot = $(this).parent().attr('id');

    console.log("Input Value: " + input);
    console.log("Corresponding time slot: " + timeSlot);

    localStorage.setItem(timeSlot, input);

    window.alert("Your event has been saved!")
    
  });

  // Time function

  function timeTracker(){
    var currentTime = dayjs().hour();

    // console.log('current time is: ' + currentTime)

    $('.time-block').each(function() {

      var timeBlock = parseInt($(this).attr('id').split('-')[1]);

      // console.log(timeBlock);

      if(timeBlock < currentTime){
      // set to present class
        $(this).addClass('past');
      } else if (timeBlock === currentTime){
      // set to past class
        $(this).removeClass('past')
        $(this).addClass('present');
      } else {
      // set to future class
        $(this).removeClass('present')
        $(this).removeClass('past')
        $(this).addClass('future');
      }
    })
  };

  timeTracker();

  setInterval(timeTracker, 15000)

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display current date at top of page

  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM DD"));

});
