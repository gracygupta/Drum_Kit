var numberOfDrums = document.querySelector(".drum").clientHeight;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
      case "w":
        this.style.color = "white";
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;

      case "a":
        this.style.color = "white";
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;

      case "s":
        this.style.color = "white";
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;

      case "d":
        this.style.color = "white";
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;

      case "j":
        this.style.color = "white";
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;

      case "k":
        this.style.color = "white";
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;

      case "l":
        this.style.color = "white";
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        // this.style.color = "#da0463";
        break;
      default:
        console.log(buttonInnerHtml);
    }
  });
}

// document.addEventListener("keypress", function () {
//   alert("asxa");
//   //   console.log(event);
// });

document.addEventListener("keypress", function (event) {
  alert("ajsnx");
});
