function validation(){
    var Nom=document.querySelector("#nom").value.length;

    var Prenom=document.querySelector("#prenom").value.length;

    var date=document.querySelector("#date").value.length;

    var Adresse=document.querySelector("#adresse").value.length;

    var email =document.querySelector("#email").value.length;

    var d= document.querySelector("#error");

    var d1= document.querySelector("#resultat");



if(Nom<5)
    {
        d.style.backgroundColor="pink";
        d.style.padding= "5px";
        d.innerHTML="le nom  est obligatoire ! ";
        d1.style.display = "none";
        d.style.display = "block";
    }
    else if (Prenom<5) {
        d.style.backgroundColor="pink";
        d.style.padding= "5px";
        d.innerHTML="le prénom  est obligatoire ! ";
        d1.style.display = "none";
        d.style.display = "block";
    }
    else if (date<5) {
        d.style.backgroundColor="pink";
        d.style.padding= "5px";
        d.innerHTML="la date de naissance   est obligatoire ! ";
        d1.style.display = "none";
        d.style.display = "block";
    }
    else if (Adresse<5) {
        d.style.backgroundColor="pink";
        d.style.padding= "5px";
        d.innerHTML="l'adresse  est obligatoire ! ";
        d1.style.display = "none";
        d.style.display = "block";
    }
    else if (email<5) {
        d.style.backgroundColor="pink";
        d.style.padding= "5px";
        d.innerHTML="la saisie des champs  est obligatoire ! ";
        d1.style.display = "none";
        d.style.display = "block";
    }
else {

        d1.style.backgroundColor="green";
        d1.style.padding= "5px";
        d1.innerHTML="Bienvenue "+document.querySelector("#prenom").value ;             
       d.style.backgroundColor=" #e9ebee";
       d.style.display = "none";
    d1.style.display = "block";

 
}




}