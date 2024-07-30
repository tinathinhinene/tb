let tableau = []
function table_multiplication(n){

n=prompt("entrer un nombre");
for(i=1; i<=10; i++){
 
  tableau.push(i+ "x <span class=\"chiffre\">" + n + "</span> = " + i *n)
};

document.getElementById("table").innerHTML= tableau.join ("<br>")
}
table_multiplication();



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