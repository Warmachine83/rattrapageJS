let caisseClaireNew = new Audio();
let charlestonNew = new Audio();
let crashNew = new Audio();
let tomMediumNew = new Audio();
let rideNew = new Audio();
let tomBassNew = new Audio();
let grosseCaiseNew = new Audio();

let caisseClaire = document.getElementById('caisseClaire');
let charleston = document.getElementById('charleston');
let crash = document.getElementById('crash');
let tomMedium = document.getElementById('tomMedium');
let ride = document.getElementById('ride');
let tomBass = document.getElementById('tomBass');
let grosseCaise = document.getElementById('grosseCaise');

let instruBtn = document.getElementsByClassName('instruBtn');

let couleur = ["black"]

caisseClaireNew.src = "SOUND/caisseClaire.m4a";
charlestonNew.src = "SOUND/charleston.m4a";
crashNew.src = "SOUND/crash.m4a";
grosseCaiseNew.src = "SOUND/grosseCaisse.m4a";
rideNew.src = "SOUND/ride.m4a";
tomBassNew.src = "SOUND/tomBass.m4a";
tomMediumNew.src = "SOUND/tomMedium.m4a";



function clickBtnCaisseClaire(){
    caisseClaireNew.play()
    caisseClaire.style.background = "green";

    setTimeout(function(){ caisseClaire.style.background = "cyan"; }, 2000);
}

function clickBtnCharleston(){
    charlestonNew.play()
    charleston.style.background = "green";

    setTimeout(function(){ charleston.style.background = "cyan"; }, 2000);
}

function clickBtnCrash(){
    crashNew.play()
    crash.style.background = "green";

    setTimeout(function(){ crash.style.background = "cyan"; }, 2000);
}

function clickBtnTomMedium(){
    tomMediumNew.play()
    tomMedium.style.background = "green";

    setTimeout(function(){ tomMedium.style.background = "cyan"; }, 2000);
}

function clickBtnRide(){
    rideNew.play()
    ride.style.background = "green";

    setTimeout(function(){ ride.style.background = "cyan"; }, 2000);
}

function clickBtnTomBass(){
    tomBassNew.play()
    tomBass.style.background = "green";

    setTimeout(function(){ tomBass.style.background = "cyan"; }, 2000);
}

function clickBtnGrosseCaisse(){
    grosseCaiseNew.play()
    grosseCaise.style.background = "green";

    setTimeout(function(){ grosseCaise.style.background = "cyan"; }, 2000);
}



document.onkeypress= function sound1(e) {
    let key = event.which || event.keyCode;
    if (key == 97) {
        caisseClaireNew.play()
        caisseClaire.style.background = "green";
        setTimeout(function(){ caisseClaire.style.background = "cyan"; }, 2000);
    }
    
    if (key == 122) {
        charlestonNew.play()
        charleston.style.background = "green";
        setTimeout(function(){ charleston.style.background = "cyan"; }, 2000);
    }
    if (key == 101) {
        crashNew.play()
        crash.style.background = "green";
        setTimeout(function(){ crash.style.background = "cyan"; }, 2000);
    }
    if (key == 114) {
        tomMediumNew.play()
        tomMedium.style.background = "green";
        setTimeout(function(){ tomMedium.style.background = "cyan"; }, 2000);
    }
    if (key == 113) {
        rideNew.play()
        ride.style.background = "green";
        setTimeout(function(){ ride.style.background = "cyan"; }, 2000);
    }
    if (key == 115) {
        tomBassNew.play()
        tomBass.style.background = "green";
        setTimeout(function(){ tomBass.style.background = "cyan"; }, 2000);
    }
    if (key == 100) {
        grosseCaiseNew.play()
        grosseCaise.style.background = "green";
        setTimeout(function(){ grosseCaise.style.background = "cyan"; }, 2000);
    }
    

}