document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = [ "Toby Fox, tambien conocido como FwugRadiation, es un compositor musical y desarrollador indie, conocido popularmente por desrrollar el popular juego llamado UNDERTALE y actualmente desarrollando su nuevo proyecto llamado DELTARUNE, aunque tambien ha echo una gran cantdad mas de proyectos.<br><br>Adentremonos a su historia:"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("div.typewritting").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 25);
        }
        
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
    
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
            StartTextAnimation(0);
            }, 99999999999999999999);
        }
        if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function(){
        StartTextAnimation(i + 1);
        });
        }
    }
    StartTextAnimation(0);
});