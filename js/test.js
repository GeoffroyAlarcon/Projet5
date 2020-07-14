// Widow.location  pour récupérer l'ID des oursons 

let idUrl = window.location.search;
let idTeddy = idUrl.substr(4);
monStockage = localStorage;
//définions des classes et des différents éléments pour construire la page produit dynamiquement


let newTeddy = document.getElementById("teddyProduct")
newTeddy.classList.add("card-body");
let teddyH3 = document.createElement("h3");
let labelColor = document.createElement("label");
let choiceColor = document.createElement("select");
teddyH3.classList.add("card-title");
let divImg = document.createElement("div");
divImg.classList.add("col-lg-6");
let divDescription = document.createElement("div");
divDescription.classList.add("col-lg-6");
let teddyPrice = document.createElement("h4");
let teddyDescription = document.createElement("p");
let divColor = document.createElement("div");
divColor.classList.add("col-lg-4");
let addTeddy = document.createElement("button");
let myImg = new Image();
myImg.addEventListener('load', function () { })
addTeddy.classList.add("btn", "btn-primary");
// fin des définions de classes et d'éléments


// promessse "resolve" pour récupérer les éléments dans le fichiers Json et les implémenter dans le code source.
function promiseGet() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/api/teddies/' + idTeddy);

        request.send();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    let response = JSON.parse(this.responseText);
                }
                // fin de la liste
                else {
                    reject(XMLHttpRequest);
                }
            }
        }
    })
};
// fin de la promessse resolve 
// ajout d'éléments dynamiques d'une peluche en fonction de son Id 
promiseGet()
    .then(function (response) {
        myImg.src = response["imageUrl"];
        newTeddy.appendChild(divImg).appendChild(myImg);
        newTeddy.appendChild(teddyH3).innerHTML = response["name"];
        newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response["price"] / 100 + " euros";
        newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response["description"];
        labelColor.innerHTML = "couleur du modèle : ";

    })
// choix de la couleur du modèle
promiseGet()
    .then(function (response) {
        for (d = 0; d < response["colors"].length; d++) {
            let x = newTeddy.appendChild(labelColor).appendChild(choiceColor)
            let option = document.createElement("option");
            option.text = response["colors"][d];

            option.setAttribute("value", option.text);
            x.add(option);

            choiceColor.addEventListener("click", function (event) {

                let colorStorage = x.value;
                event.preventDefault();
                monStockage.setItem("color", colorStorage);

            });



        }

    })
// Choix de la quantité de peluches commandées
promiseGet()
    .then(function () {

        let labelAmountTeddy = document.createElement("label");
        labelAmountTeddy.classList.add("col-lg");
        labelAmountTeddy.innerHTML = "Quantité : ";
        let amount = document.createElement("select");
        var xAmount = newTeddy.appendChild(labelAmountTeddy).appendChild(amount);
        for (d = 0; d <= 5; d++) {
            var optionAmount = document.createElement("option");
            optionAmount.text = d
            xAmount.add(optionAmount);

            amount.addEventListener("click", function (event) {
                let amountStorage = xAmount.value
                event.preventDefault();
                monStockage.setItem("amount", amountStorage);
            });
        }





    })

// fin des choix
// ajout d'un bouton pour ajouter la commande au panier.
promiseGet()
    .then(function (response) {

        newTeddy.appendChild(divColor).appendChild(addTeddy).innerHTML = "Ajouter au panier";

        addTeddy.addEventListener("click", function (event) {
            let teddyName = "Nom du modèle : " + response["name"];
            let teddyD = monStockage.getItem("amount");
            let teddyPrice = teddyD * response["price"] / 100;
            let colorTeddy = monStockage.getItem('color');
            let imageUrl = response["imageUrl"];
            let choiceTeddy = "Couleur du modèle: " + colorTeddy;
            monStockage.setItem("price", teddyPrice);
           monStockage.setItem("choice", choiceTeddy);
            monStockage.setItem("articleName", teddyName);
            monStockage.setItem("imageURL", imageUrl);
            event.preventDefault()
        })
        // fin ajout de couleur

    })
    .catch(function (error) {
    });



function promiseListTeddy() {
    return new Promise((resolve, reject) => {
        let recoverHttp = new XMLHttpRequest();
        recoverHttp.open('GET', 'http://localhost:3000/api/teddies/');
        recoverHttp.send();
        recoverHttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    var response = JSON.parse(this.responseText);

                }
                else {
                    reject(XMLHttpRequest);
                }
            }
        }
    });

}
promiseListTeddy()
    .then(function (response) {
        for (i = 0; i < response.length; i++) {
            let nameTeddy = document.createElement("p");
            let Lien = document.createElement("a")
            let idLien = response[i]["_id"];
            Lien.href = "product.html?id=" + idLien;
            nameTeddy.classList.add("bg-primary", "text-white", "listTeddy_product");
            let elt = document.getElementById("listTeddy");
            elt.appendChild(Lien).appendChild(nameTeddy).innerHTML = response[i]["name"];

        }
    })
    .catch(function (error) {

    });