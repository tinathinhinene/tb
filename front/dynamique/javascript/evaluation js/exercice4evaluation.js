// saisir prix unitaire noté PU
let pu= prompt("Veuillez entrer le prix unitaire : ");

// saisir la quantité commandée QTECOM

let qtecom=prompt("veuillez entrer la quantité commandée");

// afficher le pap

let pap;
console.log("Le prix à payer est de "+(pap=pu*qtecom));

// cas de remise de 5%

if(pap>=100 && pap<=200){
console.log("Vous obtenez une remise de 5%, il reste à payer : "+(pap-=pap*5/100));
}

// cas de 10%

if(pap>200){
    console.log("Vous obtenez une remise de 10%, il reste à payer : "+(pap-=pap*10/100));
    
    }

    // cas du port gratuit

    if (pap>500){
        console.log("Les frais de port sont gratuits donc il faut payer : "+pap); 
    }
    else{
        if (pap*2/100>6){
        console.log("Frais de port de 2%, le prix total est de : "+(pap+=pap*2/100))}
        else{
            console.log("Frais de port de 6€, le prix total est de : "+(pap+=6))
        }
    }