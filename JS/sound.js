let essai = new Audio();
let baguette = document.getElementById('baguette');
let couleur = ["black"]
essai.src = "SOUND/essai.mp3"

function clickBtn(){
    essai.play()
    baguette.style.background = "green";

    setTimeout(restoreColor, 2000);
}

function restoreColor(){
    baguette.style.background = "none";
}

document.onkeypress= function sound1(e) {
    let key = event.which || event.keyCode;
    if (key == 97) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    
    if (key == 122) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    if (key == 101) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    if (key == 114) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    if (key == 113) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    if (key == 115) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    if (key == 100) {
        essai.play()
        baguette.style.background = "green";
        setTimeout(restoreColor, 2000);
    }
    

}