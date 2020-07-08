// ajout d'une promesse pour récupérer les données 

let idUrl = window.location.search;
let idTeddy = idUrl.substr(4);
console.log();



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

                    myImg.addEventListener('load', function () {
                    });


                    addTeddy.classList.add("btn", "btn-primary");
                    // ajout d'éléments dynamiques d'une peluche en fonction de son Id 
                    myImg.src = response["imageUrl"];
                    newTeddy.appendChild(divImg).appendChild(myImg);

                    // fin du tableau
                    newTeddy.appendChild(teddyH3).innerHTML = response["name"];
                    newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response["price"] / 100 + " euros";

                    newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response["description"];
                    // ajout choix de couleurs peluches dans les sélections 
                    labelColor.innerHTML = "couleur du modèle : ";
                    for (d = 0; d < response["colors"].length; d++) {
                        var x = newTeddy.appendChild(labelColor).appendChild(choiceColor)
                        var option = document.createElement("option");
                        option.text = response["colors"][d];
                        option.setAttribute("value", option.text);
                        x.add(option);
                        // fin ajout de couleur
                    };

                    // Choix de la quantité de peluches commandées
                    let labelAmountTeddy = document.createElement("label");
                    labelAmountTeddy.classList.add("col-lg");
                    labelAmountTeddy.innerHTML = "Quantité : ";
                    let amount = document.createElement("select");
                    var xAmount = newTeddy.appendChild(labelAmountTeddy).appendChild(amount);
                    var optionAmount = document.createElement("option");
                    optionAmount.text = 1;
                    xAmount.add(optionAmount);
                    // fin du choix
                    newTeddy.appendChild(divColor).appendChild(addTeddy).innerHTML = "Ajouter au panier"
                }
                // fin de la liste
            } else {
                reject(XMLHttpRequest);
            }
        }
    })
}

const promise = promiseGet();
// fin de la promesse + exécution de la promesse




function promiseListTeddy() {
    return new Promise((resolve, reject) => {
        let recoverHttp = new XMLHttpRequest();
        recoverHttp.open('GET', 'http://localhost:3000/api/teddies/');
        recoverHttp.send();
        recoverHttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(XMLHttpRequest);
                    resolve(JSON.parse(this.responseText));
                    var response = JSON.parse(this.responseText);


                    for (i = 0; i < response.length; i++) {
                        let nameTeddy = document.createElement("p");
                        let Lien = document.createElement("a")
                        let idLien = response[i]["_id"];
                        Lien.href = "product.html?id=" + idLien;
                        nameTeddy.classList.add("bg-primary", "text-white");
                        let elt = document.getElementById("listTeddy");
                        elt.appendChild(Lien).appendChild(nameTeddy).innerHTML = response[i]["name"];

                    }
                }
            } else {
                reject(XMLHttpRequest);
            }
        }

    })
};
const promise2 = promiseListTeddy();