let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

    let x = prompt("veuillez choisir un prénom");
    for (i = 0; i < tab.length; i++)
        if (x == tab[i]) {

            tab.splice(i, 1);
            tab.push("");

        }
    console.log(tab);

