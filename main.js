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
    .typeString('CSS<b>3</b>')
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
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

const TEXTS = [
    'David Iván Cabello',
];
const scrambler = new window.Scrambler();
const scramblerTwo = new window.Scrambler();
const handleScramble = (text) => {
    document.getElementById('scrambletext').innerHTML = text;
}
let i = 0;
function printText() {
    scrambler.scramble(TEXTS[i % TEXTS.length], handleScramble);
    setTimeout(printText, 3500);
    i++;
}

printText();


let mochila=cuadernos
function materiales() {
    let cartuchera = lapices
}
console.log(cartuchera)
