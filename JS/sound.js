let essai = new Audio();
essai.src = "SOUND/essai.mp3"



document.onkeypress= function sound1(e) {
    let key = event.which || event.keyCode;
    if (key == 97) {
        essai.play()
    }
}