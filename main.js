
AOS.init();

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('signer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Freelancer')
    .pauseFor(2500)
    .start();

var app = document.getElementById('app2');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('HTML<b>5</b>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('CSS3</b>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Java<b>Script</b>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Visual <b>Studio</b> Code')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<b>Git</b>Hub')
    .pauseFor(1000)
    .deleteAll()
    .typeString('git')
    .pauseFor(1000)
    .start();

window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

// create an instance of Scrambler.
const scrambler = new Scrambler();

// define a handler that is called whenever text is scrambled.
const handleScramble = (text) => {
    console.log(text);
}

// call scramble function with the text to be scrambled and handler.
scrambler.scramble('- Friedrich Nietzsche -', handleScramble);