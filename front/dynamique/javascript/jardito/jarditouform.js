function verif_formulaire(){
    if(document.jarformulaire.nom.value=="")  {
        alert("veuillez entrer votre nom");
        document.jarformulaire.nom.focus();
        return false;
    }
}