
// document.addEventListener("keydown", function (event) {
//     var letterPressed = event.key
// })

// var classDrum = document.querySelectorAll(".drum");
// for (var i = 0; i <= classDrum.length; i++) {
//     classDrum[i].addEventListener ("click", function () {
       
//         var letterInButton = this.innerHTML;

document.addEventListener("keydown", function (event) {
        var letterPressed = event.key

        switch (letterPressed) {
            
            case "w": 
                var letterW = new Audio("sounds/tom-1.mp3");
                letterW.play();
            break;

            case "a":
                var letterA = new Audio("sounds/tom-2.mp3");
                letterA.play();
            break;

            case "s":
                var letterS = new Audio("sounds/tom-3.mp3");
                letterS.play();
            break;

            case "d":
                var letterD = new Audio("sounds/tom-4.mp3");
                letterD.play();
            break;
            
            case "j":
                var letterJ = new Audio("sounds/snare.mp3");
                letterJ.play();
            break;

            case "k":
                var letterK = new Audio("sounds/crash.mp3");
                letterK.play();
            break;

            case "l": 
                var letterL = new Audio("sounds/kick-bass.mp3");
                letterL.play();
            break;

            default:
                alert("Click inside the buttons!")
            
        }

})
    




    // var audio = new Audio("./sounds/tom-1.mp3");
    // console.log(new Audio)
    // audio.play()