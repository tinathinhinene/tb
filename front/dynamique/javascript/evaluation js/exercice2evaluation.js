let i;
let n;
function table_multiplication(n){
for(i=1; i<=10; i++){
let resultat=i*n;

document.write(n+ "x" +i+ "="+n *i+"<br>");
}}
n=prompt("entrer un nombre");
table_multiplication(n);