let p = document.createElement("p");

if (sessionStorage.getItem("newArticle")) {
    let session = sessionStorage.getItem("newArticle");
    localStorage.setItem("Ori" + localStorage.length++, session);
    sessionStorage.removeItem("newArticle")
}

// afichage dynamiquement des oursons commandés
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
        divName.classList.add("col-lg-2", "text-center", "my-5");
        let divColor = document.createElement("div");
        divColor.classList.add("col-lg-2", "text-center", "my-5");
        let divAmount = document.createElement("div");
        divAmount.classList.add("col-lg-2", "text-center", "my-5");
        let divPrice = document.createElement("div");
        divPrice.classList.add("col-lg-2", "text-center", "my-5");
        let divRemoveArticle = document.createElement("div");
        divRemoveArticle.classList.add("my-5");

        // ajout dinamiquement des éléments au panier.
        elt.appendChild(divNewArticle).appendChild(divIMG).appendChild(imgTeddy);
        elt.appendChild(divNewArticle).appendChild(divName).appendChild(pName).innerHTML = "Nom de l'article : " + newArticle["name"];
        elt.appendChild(divNewArticle).appendChild(divColor).innerHTML = "Couleur du modèle : " + newArticle["color"];
        elt.appendChild(divNewArticle).appendChild(divAmount).innerHTML = "Quantité : " + newArticle["amount"];
        elt.appendChild(divNewArticle).appendChild(divPrice).innerHTML = "Prix à l'unité : " + newArticle["price"] + " euros";
    }
}
// création de l'élément prix total et d'un bouton vider panier
let elt = document.getElementById("cart");
let divTotalPrice = document.createElement("div");
divTotalPrice.classList.add("text-center");
let totalPrice = []
for (i = 0; i < localStorage.length; i++) {
    let article = JSON.parse(localStorage.getItem(localStorage.key(i)))
    let calcul = article["price"] * article["amount"];
    totalPrice.push(calcul)
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let divRemoveArticle = document.createElement("div");
divRemoveArticle.classList.add("row", "text-center");
let removeArticle = document.createElement("p");
let removeArticleA = document.createElement("a");
removeArticleA.classList.add("stretched-link", "text-white")
removeArticleA.href = "cart.html"
removeArticleA.classList.add = ""
removeArticle.classList.add("bg-primary", "col-lg-2", "offset-lg-5","my-5");
removeArticle.addEventListener("click", function (e) {
    localStorage.clear()
})
console.log(totalPrice.reduce(reducer));
elt.appendChild(divTotalPrice).innerHTML = "le prix total de votre commande est de " + totalPrice.reduce(reducer) + " euros"
elt.appendChild(divRemoveArticle).appendChild(removeArticle).appendChild(removeArticleA).innerHTML = "vider votre panier"
// fin de la création de l'éménet "Prix total" //



// Création de l'élément prix total // 


// création du formulaire de contact    session
// création des balises pour le formulaire
if (localStorage.length >= 1) {
    let form = document.getElementById("form");
    form.classList.add("text-center");
    let labelFirstName = document.createElement("label");
    let divFirstName = document.createElement("div");
    let firstName = document.createElement("input");
    firstName.required = true;
    firstName.name = "Nom de famille";
    firstName.id = "firstName";
    let helpForm = document.createElement("div");
    helpForm.classList.add("text-center");
    let divLastName = document.createElement("div");
    let lastName = document.createElement("input");
    lastName.required = true;
    lastName.name = "Prénom";
    lastName.id = "lastName";
    let labelLastName = document.createElement("label");

    let labelEmail = document.createElement("label");
    let divEmail = document.createElement("div")
    let email = document.createElement("input")
    email.name = "Adresse mail";
    email.id = "email"
    let labelConfirmMail = document.createElement("label");
    let divConfirmMail = document.createElement("div")
    let confirmMail = document.createElement("input")
    confirmMail.type = "email";
    confirmMail.required = true;
    confirmMail.name = "confirmation d'adresse mail";
    let divBirthday = document.createElement("div");
    let labeLBirthday = document.createElement("label");
    let dateOfBirthday = document.createElement("input");
    dateOfBirthday.type = "date"
    dateOfBirthday.min = "1900-01-01";
    dateOfBirthday.max = "2003-01-01";
    dateOfBirthday.required = true;
    dateOfBirthday.name = "date de naissance";
    let divAddress = document.createElement("div");
    let labelAddress = document.createElement("label");
    let address = document.createElement("input");
    address.id = "address";
    address.required = true;
    address.name = "Adresse postale";
    let divZipCode = document.createElement("div");
    let labelZipCode = document.createElement("label");
    let zipCode = document.createElement("input");
    zipCode.required = true;
    zipCode.name = "code postal";
    let divCity = document.createElement("div");
    let labelCity = document.createElement("label");
    let city = document.createElement("input");
    city.required = true;
    city.name = "ville de résidence";
    city.id = "city";
    let divTel = document.createElement("div");
    let labelTel = document.createElement("label");
    let tel = document.createElement("input");

    tel.type = "tel";
    tel.name = "Téléphone";
    tel.required = true;
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Finalisez votre commande";
    submit.classList.add("bg-primary", "text-white")
    //validation des REGEX après envoi
    function isValid(value) {
        return /^[A-Z-a-z]{3,40}$/.test(value);
    }
    function validTel(value) {
        return /^\d{10}$/.test(value);
    }
    function validAddress(value) {
        return /^[A-Z-a-z-0-9\s]{10,80}$/.test(value)
    }
    function validcity(value) {
        return /^[A-Z-a-z-\s]{3,40}$/.test(value)
    }

    function validZipCode(value) {
        return /^[0-9]{5}$/.test(value)
    }

    // Affichage d'un message contextuel pour la saisie du numéro de téléphone
    tel.addEventListener("focus", function () {

        helpForm.textContent = "Entrez votre numéro de téléphone à 10 chiffres";
    });
    // Suppression du message contextuel pour la saisie du numéro de téléphone
    tel.addEventListener("blur", function () {
        helpForm.textContent = "";
    });

    // Affichage d'un message contextuel pour la saisie du nom de famille
    firstName.addEventListener("focus", function () {
        helpForm.textContent = "Ce champ prend en compte seulement les caractères Alpha,  les chiffre et les symboles ne sont pas autorisés";
    });
    // Suppression du message contextuel pour la saisie du nom de famille
    firstName.addEventListener("blur", function () {
        helpForm.textContent = "";
    });
    // Affichage d'un message contextuel pour la saisie du prénom
    lastName.addEventListener("focus", function () {
        helpForm.textContent = "Ce champ prend seulement les caractères Alpha,  les chiffre et les symboles ne sont pas autorisés";
    });
    // Suppression du message contextuel pour la saisie du nom du Prénom
    lastName.addEventListener("blur", function () {
        helpForm.textContent = "";
    });


    // Affichage d'un message contextuel pour la saisie du numéro de téléphone
    zipCode.addEventListener("focus", function () {
        helpForm.textContent = "Entrez votre code postal à 5 chiffres";
    });
    // Suppression du message contextuel pour la saisie du numéro de téléphone
    zipCode.addEventListener("blur", function () {
        helpForm.textContent = "";
    });



    form.appendChild(divFirstName).appendChild(labelFirstName).innerHTML = " Votre Prénom : ";
    form.appendChild(divFirstName).appendChild(labelFirstName).appendChild(firstName);
    form.appendChild(divLastName).appendChild(labelLastName).innerHTML = " Votre nom de famille : ";
    form.appendChild(divLastName).appendChild(labelLastName).appendChild(lastName);
    form.appendChild(divTel).appendChild(labelTel).innerHTML = "Votre numéro de téléphone :";
    form.appendChild(divTel).appendChild(labelTel).appendChild(tel);
    form.appendChild(divEmail).appendChild(labelEmail).innerHTML = " Votre adresse mail : ";
    form.appendChild(divEmail).appendChild(labelEmail).appendChild(email);
    form.appendChild(divConfirmMail).appendChild(labelConfirmMail).innerHTML = " Confirmez votre adresse mail : ";
    form.appendChild(divConfirmMail).appendChild(labelConfirmMail).appendChild(confirmMail);
    form.appendChild(divBirthday).appendChild(labeLBirthday).innerHTML = "Votre date de naissance : "
    form.appendChild(divBirthday).appendChild(labeLBirthday).appendChild(dateOfBirthday);
    form.appendChild(divAddress).appendChild(labelAddress).innerHTML = " Votre adresse : ";
    form.appendChild(divAddress).appendChild(labelAddress).appendChild(address);
    form.appendChild(divZipCode).appendChild(labelZipCode).innerHTML = "Votre code postale : ";
    form.appendChild(divZipCode).appendChild(labelZipCode).appendChild(zipCode);
    form.appendChild(divCity).appendChild(labelCity).innerHTML = "Votre ville de résidence : ";
    form.appendChild(divCity).appendChild(labelCity).appendChild(city);

    form.appendChild(helpForm);
    form.appendChild(submit);

    form.addEventListener("submit", function (event) {
        if (validTel(tel.value)) {
        }
        else {
            alert("Votre numéro de téléphone est invalide. Vous devez composez un numéro à 10 chiffre exactement")
            event.preventDefault();
        }
        if (isValid(lastName.value) && isValid(firstName.value)) {

        }
        else {
            alert("Seuls les caractères alpha sont pris en charge, aucun chiffre et/ou symbole n'est autorisé")
            event.preventDefault()
        }
        if (validZipCode(zipCode.value)) {

        }
        else {
            alert("votre code Postal est composé seulement de 5 chiffres")
            event.preventDefault()
        }

        if (email.value === confirmMail.value) {

        }
        else {
            alert("L'adresse mail et la confirmation de votre adresse mail ne correspondent pas.")

        }
        if (validTel(tel.value) && isValid(lastName.value) && isValid(firstName.value) && email.value === confirmMail.value && validZipCode(zipCode.value) && validAddress(address.value)) {
            alert(" Votre commande a bien été prise en compte")
            event.preventDefault();
            // boucle pour envoyer le prix total de la commande dans la page de remerciement
            let totalPrice = []
            for (i = 0; i < localStorage.length; i++) {
                let article = JSON.parse(localStorage.getItem(localStorage.key(i)))
                let calcul = article["price"] * article["amount"];
                totalPrice.push(calcul);
            };
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            sessionStorage.setItem("totalPrice", totalPrice.reduce(reducer));

            let request = new XMLHttpRequest();
            request.open("POST", "http://localhost:3000/api/teddies/order");
            request.setRequestHeader("Content-Type", "application/json");
            let contact = {
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: email.value,
            }

            //boucle pour mettre tous les id des oursons commandés dans le tableau Products
            let products = [];
            for (i = 0; i < localStorage.length; i++) {
                let article = JSON.parse(localStorage.getItem(localStorage.key(i)));
                let products_id = article["id"];

                products.push((products_id));
            }
            console.log(products);


            let objet = {
                contact,
                products,
            }
            let order = JSON.stringify(objet)

            request.onreadystatechange = function () {
                if (this.readyState == XMLHttpRequest.DONE) {
                    console.log(this.responseText)
                    window.location = "thanks.html";
                    localStorage.setItem("order", this.responseText)
                }


            }
            request.send(order);
        }
        else {
            event.preventDefault()
        }
    })
}
