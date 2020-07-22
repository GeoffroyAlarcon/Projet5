

let p = document.createElement("p");


if (sessionStorage.getItem("newArticle")) {
    let session = sessionStorage.getItem("newArticle");
    localStorage.setItem("Ori" + localStorage.length++, session);
    let newArticle = JSON.parse(sessionStorage.getItem("newArticle"));
    sessionStorage.setItem("test", newArticle["price"]);
    sessionStorage.removeItem("newArticle");
    sessionStorage.removeItem("color");
    sessionStorage.removeItem("amount");
   
}
// initialisation JSON.PARSE + localisation ID Panier

if (localStorage.length >= 1) {
    for (i = 0; i < localStorage.length; i++) {
        let newArticle = JSON.parse(localStorage.getItem("Ori" + i));
        let elt = document.getElementById("cart");
        // création des différements éléments qui compose le panier
        let pName = document.createElement("p");
        let imgTeddy = new Image();
        let divNewArticle = document.createElement("div");
        divNewArticle.classList.add("row");
        imgTeddy.src = newArticle["imageUrl"];
        imgTeddy.addEventListener("load", function () { });
        let divIMG = document.createElement("div");
        divIMG.classList.add("col-lg-3");
        let divName = document.createElement("div");
        divName.classList.add("col-lg-3", "text-center", "my-5");
        let divColor = document.createElement("div");
        divColor.classList.add("col-lg-2", "text-center", "my-5");
        let divAmount = document.createElement("div");
        divAmount.classList.add("col-lg-2", "text-center", "my-5");
        let divPrice = document.createElement("div");
        divPrice.classList.add("col-lg-2", "text-center", "my-5");

        // ajout dinamiquement des éléments au panier.
        elt.appendChild(divNewArticle).appendChild(divIMG).appendChild(imgTeddy);
        elt.appendChild(divNewArticle).appendChild(divName).appendChild(pName).innerHTML = "Nom de l'article : " + newArticle["name"];
        elt.appendChild(divNewArticle).appendChild(divColor).innerHTML = "Couleur du modèle : " + newArticle["color"];
        elt.appendChild(divNewArticle).appendChild(divAmount).innerHTML = "Quantité : " + newArticle["amount"];
        elt.appendChild(divNewArticle).appendChild(divPrice).innerHTML = "Prix : " + newArticle["price"] + " euros";
      
    }
    // Création de l'élément prix total // 
    let elt = document.getElementById("cart");
    let divTotalPrice = document.createElement("div");
    divTotalPrice.classList.add("text-center");

    if (sessionStorage.length <= 1 && sessionStorage.getItem("test")) {
        sessionStorage.setItem("totalPrice", sessionStorage.getItem("test"));
        sessionStorage.removeItem("test");
    }
    else if ( sessionStorage.length > 1 && sessionStorage.getItem("test")) {
        sessionStorage.setItem("totalPrice", JSON.parse(sessionStorage.getItem("totalPrice")) + JSON.parse(sessionStorage.getItem("test")));
        sessionStorage.removeItem("test");
    }
    elt.appendChild(divTotalPrice).innerHTML = "Prix total de la commande = " + sessionStorage.getItem("totalPrice");
    // fin de la création de l'éménet "Prix total" //
};

// création du formulaire de contact 
// création des balises pour le formulaire
if (localStorage.length >= 1) {
    let form = document.getElementById("form")
    let divFirstName = document.createElement("div");
    let firstName = document.createElement("input");
    let divName = document.createElement("div");
    let Name = document.createElement("input");
    name.type = "text";
    let labelFirstName = document.createElement("label");
    let labelName = document.createElement("label");
    let labelMail = document.createElement("label");
    let divMail = document.createElement("div")
    let mail = document.createElement("input")
    mail.type = "email";
    let divBirthday = document.createElement("div");
    let labeLBirthday = document.createElement("label");
    let dateOfBirthday = document.createElement("input");
    dateOfBirthday.type = "date"
    dateOfBirthday.min = "1900-01-01";
    let divAdress = document.createElement("div");
    let labelAdress = document.createElement("label");
    let adress = document.createElement("input");
    let divZipCode = document.createElement("div");
    let labelZipCode = document.createElement("label");
    let zipCode = document.createElement("input");
    zipCode.type = "number";
    let divCity = document.createElement("div");
    let labelCity = document.createElement("label");
    let city = document.createElement("input");
    let divTel = document.createElement("div");
    let labelTel = document.createElement("label");
    let tel = document.createElement("input");
    tel.type = "tel";
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.classList.add("bg-primary", "text-white")
    // fin de la créations des balises pour le formulaire
    // ajout dinamiquement du formulaire //
    form.appendChild(divFirstName).appendChild(labelFirstName).innerHTML = " votre Nom : ";
    form.appendChild(divFirstName).appendChild(labelFirstName).appendChild(firstName);
    form.appendChild(divName).appendChild(labelName).innerHTML = " votre Prénom : ";
    form.appendChild(divName).appendChild(labelName).appendChild(Name);
    form.appendChild(divMail).appendChild(labelMail).innerHTML = " Votre adresse mail : ";
    form.appendChild(divMail).appendChild(labelMail).appendChild(mail);
    form.appendChild(divBirthday).appendChild(labeLBirthday).innerHTML = "Votre date de naissance : "
    form.appendChild(divBirthday).appendChild(labeLBirthday).appendChild(dateOfBirthday);
    form.appendChild(divAdress).appendChild(labelAdress).innerHTML = " Votre adresse postale : ";
    form.appendChild(divAdress).appendChild(labelAdress).appendChild(adress);
    form.appendChild(divZipCode).appendChild(labelZipCode).innerHTML = "Votre code postale : ";
    form.appendChild(divZipCode).appendChild(labelZipCode).appendChild(zipCode);
    form.appendChild(divCity).appendChild(labelCity).innerHTML = "Votre ville de résidence : ";
    form.appendChild(divCity).appendChild(labelCity).appendChild(city);
    form.appendChild(divTel).appendChild(labelTel).innerHTML = "Votre numéro de téléphone :";
    form.appendChild(divTel).appendChild(labelTel).appendChild(tel);
    form.appendChild(submit);

}