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
};
