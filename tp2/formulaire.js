function validation(){
    var Nom=document.getElementById("Nom").value.length;
    var Prenom=document.getElementById("Prenom").value.length;
    var date=document.getElementById("date").value.length;
    var Adresse=document.getElementById("Adresse").value.length;
    var email =document.getElementById("email").value.length;

if (Nom<5) {
    
    var d= document.querySelector("#error");
    d.style.backgroundColor='rgb(182, 82, 137)';
    d.style.padding='5px';
    d.style.border='1px black';
  d.innerHTML="la saisie du nom est obligatoire ! "
    
} else {
    if (Prenom<5) {
        var d= document.querySelector("#error");
        d.style.backgroundColor='rgb(182, 82, 137)';
        d.style.padding='5px';
        d.style.border='1px black';
        d.innerHTML="la saisie du prenom est obligatoire ! ";
        
    } else {
        if (Adresse<5) {
            var d= document.querySelector("#error");
            d.style.backgroundColor='rgb(182, 82, 137)';
            d.style.padding='5px';
            d.style.border='1px black';
            d.innerHTML="la saisie  d'adresse est obligatoire ! "
    } else {
        if (email<5) {
            var d= document.querySelector("#error");
            d.style.backgroundColor='rgb(182, 82, 137)';
            d.style.padding='5px';
            d.style.border='1px black';
            document.getElementById("p4").innerHTML="la saisie de mail est obligatoire ! "
    
        } else {
            if (date<5) {
                var d= document.querySelector("#error");
                d.style.backgroundColor='rgb(182, 82, 137)';
                d.style.padding='5px';
                d.style.border='1px black';
                d.innerHTML="la saisie de la date de naissancee est obligatoire ! ";
            } else {
                var d= document.querySelector("#resultat");
                d.style.backgroundColor='rgb(0, 128, 0)';
                d.style.padding='5px';
                var t=  document.getElementById("txt");
                t.style.color="rgb(255, 255, 255)";
                t.innerHTML="Bienvenue"+" "+document.querySelector("#Prenom").value; 
            }
            
        }
        
    }
        
    }
    
}

}