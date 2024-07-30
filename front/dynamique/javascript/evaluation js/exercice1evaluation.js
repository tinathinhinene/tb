let j = 0;
let a = 0;
let v = 0;
let personnes;
do {
    personnes = prompt("Entrez votre age");
    if (personnes < 20 && personnes!="") {
        j++;
        console.log(j);
    }
    else if ((personnes >= 20) && (personnes <= 40)) {
        a++;
        console.log(a);
    }
    else if ((personnes > 40) && (personnes <=100)) {
        v++;
        console.log(v);
    }
}
while (personnes < 100);

alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" + " vieux\n " + " dont " + " 1 " + "" + " centenaire ");


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



// JavaScript Document
function tombe () {
  for (var i = 0; i < nbFlocons; i++) {
    if (flocons[i]["top"] > hauteurF) {
      flocons[i]["top"] = 0;
      flocons[i]["left"] = Math.floor(Math.random()*largeurF);
    } else 
      flocons[i]["top"] += 3;
    document.getElementById('f'+i).style.top = flocons[i]["top"]+'px';
    document.getElementById('f'+i).style.left = flocons[i]["left"]+'px';
  }
}

var myAudio = document.createElement("audio");
myAudio.src = "mysprite.mp3";
myAudio.play();
myAudio.pause();
