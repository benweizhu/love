window.onload = function() {
  var heart = document.querySelector(".heart-wrapper");

  function toggleActivate() {
    heart.classList.toggle("active");
  }

  heart.addEventListener(
    "click",
    function() {
      toggleActivate();
    },
    false
  );

  var countDownDate = new Date("Feb 14, 2018 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.querySelector(".date-wrapper").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".date-wrapper").innerHTML = "Forever";
    }
  }, 1000);

};
