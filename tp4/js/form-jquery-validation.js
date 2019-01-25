$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
   
    // Y mettre le code jQuery pour valider tous les champs du formulaire
    $("#valider").on("click", function (event) {
        event.preventDefault();
        
        var nom = $("#name").val();
        var prenom = $("#firstname").val();
        var date = $("#birth").val();
        var adresse = $("#adresse").val();
        var mail = $("#mail").val();

        if(nom.length==0 || prenom.length==0 || date.length==0 || adresse.length==0 || mail.length==0 )
        {
            $(".modal-title").text("Message D'erreur !");
            $(".modal-body").text("Veuillez saisir tous les champs svp.")
            $('#myModal').modal("show");
        }
        else{
            contactStore.add(nom, prenom, date, adresse, mail);
            contactList = contactStore.getList();
            document.querySelector("table tbody").innerHTML = "";
            for (var index in contactList) {
              document.querySelector("table tbody").innerHTML =document.querySelector("table tbody").innerHTML +
              '<td>' +contactList[index].name + 
              '</td><td>' + contactList[index].firstname+ 
              '</td><td>'+contactList[index].date+
              '</td><td>'+contactList[index].adresse+
              '</td><td>'+contactList[index].mail+'</td>';
        }
    }});
    $( "#name" ).keyup(function() {
        var nom = $("#name").val();
        $("#nbrnom").text(nom.length + " car. " );



      });
      $( "#firstname" ).keyup(function() {
        var prenom= $("#firstname").val();
        $("#nbrprenom").text(prenom.length + " car. " );

      });

});