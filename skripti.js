//alert("Sveiks! ;)")
console.log("Sveiks! ;)");

const API = "https://SutaZinasJasons.zmmm.repl.co"
var logs = document.querySelector(".chataZinas");
var vards = document.querySelector("#vards");
var zinas = document.querySelector("#zina");

function sutitZinu(){

    console.log("poga iet");
    console.log("ziņa ir:"+zinas.value);

    logs.innerHTML = logs.innerHTML +"</br>" + zinas.value;
    fetch(API + '/sutit/' + vards.value + "/" + zinas.value)
}

async function ieladetZinas(){
let datiNoServera = await fetch(API + "/lasit");
let dati = await datiNoServera.text();
console.log(dati);

logs.innerHTML = dati;
}

//reizi viena sekunde izpilda funkciju ieladetZinas
setInterval(ieladetZinas, 1000)