//alert("Sveiks! ;)")
console.log("Sveiks! ;)");

var logs = document.querySelector(".chataZinas");
var vards = document.querySelector("#vards");
var zinas = document.querySelector("#zina");

function sutitZinu(){

    console.log("poga iet");
    console.log("ziņa ir:"+zinas.value);

    logs.innerHTML = logs.innerHTML +"</br>" + zinas.value;
}

async function ieladetZinas(){
let datiNoServera = await fetch("zinas.txt");
let dati = await datiNoServera.text();
console.log(dati);

logs.innerHTML = dati;
}

//reizi viena sekunde izpilda funkciju ieladetZinas
setInterval(ieladetZinas, 1000)