$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
   

    // Y mettre le code jQuery pour valider tous les champs du formulaire
    $("#valider").on("click", function (event) {
        event.preventDefault();
        
        var $nom = $("#name").val();
        var $prenom = $("#firstname").val();
        var $date = $("#birth").val();
        var $adresse = $("#Adresse").val();
        var $mail = $("#Mail").val();

        if($nom.length==0 || $prenom.length==0 || $date.length==0 || $adresse.length==0 || $mail.length==0 )
        {
            $(".modal-title").text("Message D'erreur !");
            $(".text").text("Veuillez saisir tous les champs svp.")
           

            $('#myModal').modal("show");
        }
        else{
            var lien = "http://maps.google.com/maps?q="+$adresse;
            $(".modal-title").text("Bonjour " +$nom);
            $(".text").text("Vous etes née le " +$date + " et vous habitez "+ $adresse);
            $(".image").html('<a href="'+lien+'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='+$adresse+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>'); 
            $('#myModal').modal("show");
        }
 
    });
});