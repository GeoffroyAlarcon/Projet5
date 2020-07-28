isValid(name.value) && isValid(firstName.value)

    
    if (isValid(name.value) && isValid(firstName.value)) {

    }
    else {
        alert("votre nom ou prénom est invalide. Vous devez utiliser seulement des lettres et des tirets. Aucun caractère spéciaux n'est accepté")
    }

   

        // fin de la créations des balises pour le formulaire
        // ajout dinamiquement du formulaire //


     
        let request = new XMLHttpRequest();
           
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
            }
        }
        request.open("POST", "http://localhost:3000/api/teddies/order", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(document.forms);
    }
})

   
  if (mail.value === confirmMail.value) {

    
    document.getElementById("submit").addEventListener("click", function () {
      
    })
    