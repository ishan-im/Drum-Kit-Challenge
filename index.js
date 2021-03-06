
//detecting button press

var numberOfDrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;


    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  })
}

//detecting keypress

document.addEventListener("keydown", function (event) {





  makeSound(event.key);

  buttonAnimation(event.key);
});

//sound function

function makeSound(key) {
  switch (key) {
    case "A", "a":

      var boom = new Audio("sounds/Drum_Kit_sounds_boom.wav");
      boom.play();

      break;

    case "S", "s":

      var clap = new Audio("sounds/Drum_Kit_sounds_clap.wav");
      clap.play();
      break;

    case "D", "d":

      var hihat = new Audio("sounds/Drum_Kit_sounds_hihat.wav");
      hihat.play();
      break;

    case "F", "f":

      var kick = new Audio("sounds/Drum_Kit_sounds_kick.wav");
      kick.play();
      break;

    case "G", "g":

      var openhat = new Audio("sounds/Drum_Kit_sounds_openhat.wav");
      openhat.play();
      break;

    case "H", "h":

      var ride = new Audio("sounds/Drum_Kit_sounds_ride.wav");
      ride.play();
      break;

    case "J", "j":

      var snare = new Audio("sounds/Drum_Kit_sounds_snare.wav");
      snare.play();
      break;

    case "K", "k":

      var tink = new Audio("sounds/Drum_Kit_sounds_tink.wav")
      tink.play();
      break;

    case "L", "l":

      var tom = new Audio("sounds/Drum_Kit_sounds_tom.wav")
      tom.play();
      break;

    default: console.log(innerHTML);

  }

}

//animation function

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("button-onclick");

  setTimeout(
    function () {
      activeButton.classList.remove("button-onclick");
    }, 100
  );

}

