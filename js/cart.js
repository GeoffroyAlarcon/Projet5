
let p = document.createElement("p");

if (localStorage.getItem("totalPrice")) {
    sessionStorage.setItem("totalPrice", JSON.parse(localStorage.getItem("totalPrice")));
    localStorage.removeItem("totalPrice")
}

if (sessionStorage.getItem("newArticle")) {
    let session = sessionStorage.getItem("newArticle");
    localStorage.setItem("Ori" + localStorage.length++, session);
    sessionStorage.removeItem("newArticle");
    sessionStorage.removeItem("color");
    sessionStorage.removeItem("amount");

}


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
        elt.appendChild(divNewArticle).appendChild(divPrice).innerHTML = "Prix à l'unité : " + newArticle["price"] + " euros";

    }
}
let elt = document.getElementById("cart");
let divTotalPrice = document.createElement("div");
divTotalPrice.classList.add("text-center");

if (localStorage.length <= 1) {
    let newArticle = JSON.parse(localStorage.getItem(localStorage.key(0)))
    localStorage.setItem("totalPrice", + newArticle["price"] * newArticle["amount"]);
    sessionStorage.removeItem("totalPrice");
    elt.appendChild(divTotalPrice).innerHTML = "Prix total de la commande = " + localStorage.getItem("totalPrice") + " euros";

}

else if (localStorage.length >= 2) {
    let i = localStorage.length - 1;
    let test = JSON.parse(sessionStorage.getItem("totalPrice"));
    let newArticle = JSON.parse(localStorage.getItem(localStorage.key(i)))
    let calcul=  newArticle["price"] * newArticle["amount"]
    localStorage.setItem("totalPrice", test + calcul );
    sessionStorage.removeItem("totalPrice");
    elt.appendChild(divTotalPrice).innerHTML = "Prix total de la commande = " + localStorage.getItem("totalPrice") + " euros";

}
// fin de la création de l'éménet "Prix total" //



// Création de l'élément prix total // 


// création du formulaire de contact    session
// création des balises pour le formulaire
if (localStorage.length >= 1) {
    let form = document.getElementById("form");
    form.classList.add("text-center");
    let divFirstName = document.createElement("div");
    let firstName = document.createElement("input");
    firstName.required = true;
    firstName.value = "e2020";

    let divName = document.createElement("div");
    let name = document.createElement("input");
    name.required = true;
    name.value = "";
    let labelFirstName = document.createElement("label");
    let labelName = document.createElement("label");
    let labelMail = document.createElement("label");
    let divMail = document.createElement("div")
    let mail = document.createElement("input")
    mail.type = "email";
    mail.required = true;
    let divBirthday = document.createElement("div");
    let labeLBirthday = document.createElement("label");
    let dateOfBirthday = document.createElement("input");
    dateOfBirthday.type = "date"
    dateOfBirthday.min = "1900-01-01";
    dateOfBirthday.max = "2003-01-01";
    dateOfBirthday.required = true;
    let divAdress = document.createElement("div");
    let labelAdress = document.createElement("label");
    let adress = document.createElement("input");
    adress.required = true;
    let divZipCode = document.createElement("div");
    let labelZipCode = document.createElement("label");
    let zipCode = document.createElement("input");
    zipCode.required = true;
    zipCode.type = "number";
    let divCity = document.createElement("div");
    let labelCity = document.createElement("label");
    let city = document.createElement("input");
    city.required = true;
    let divTel = document.createElement("div");
    let labelTel = document.createElement("label");
    let tel = document.createElement("input");
    tel.type = "tel";
    tel.required = true;
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Finalisez votre commande"
    submit.classList.add("bg-primary", "text-white")
    //validation des REGEX après envoi
    function isValid(value) {
        return /[A-Z-a-z]{3,}$/.test(value);
    }
    function validTel(value) {
        return /[0-9]{10}/.test(value);
    }
    function validAdress(value){
        return /[a-z-A-Z-0-9]/.test(value)
    }

    form.addEventListener("submit", function (event) {
        if (isValid(firstName.value) && isValid(name.value) && validTel(tel.value)) {
            alert(true)
        }

        else {
            alert(false)
        }
        event.preventDefault();
        event.stopPropagation();
    })
    // fin de la créations des balises pour le formulaire
    // ajout dinamiquement du formulaire //
    form.appendChild(divFirstName).appendChild(labelFirstName).innerHTML = " votre Nom : ";
    form.appendChild(divFirstName).appendChild(labelFirstName).appendChild(firstName);
    form.appendChild(divName).appendChild(labelName).innerHTML = " votre Prénom : ";
    form.appendChild(divName).appendChild(labelName).appendChild(name);
    form.appendChild(divTel).appendChild(labelTel).innerHTML = "Votre numéro de téléphone :";
    form.appendChild(divTel).appendChild(labelTel).appendChild(tel);
    form.appendChild(divMail).appendChild(labelMail).innerHTML = " Votre adresse mail : ";
    form.appendChild(divMail).appendChild(labelMail).appendChild(mail);
    form.appendChild(divBirthday).appendChild(labeLBirthday).innerHTML = "Votre date de naissance : "
    form.appendChild(divBirthday).appendChild(labeLBirthday).appendChild(dateOfBirthday);
    form.appendChild(divAdress).appendChild(labelAdress).innerHTML = " Votre adresse postale : ";
    form.appendChild(divAdress).appendChild(labelAdress).appendChild(adress);
    
    form.appendChild(submit);

}
