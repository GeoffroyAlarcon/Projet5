// ajout d'une promesse pour récupérer les données 

let lienId = window.location.search;
const regex1 = new RegExp('/\w+/');
const regex2 = new RegExp('\\w+');

function promiseGet() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
    
        request.open('GET', 'http://localhost:3000/api/teddies/'+lienId);
    
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    var response = JSON.parse(this.responseText);
                    console.log(regex1);
                    console.log(regex2);
                    let elt = document.getElementById("listTeddy")
                    let newTeddy = document.getElementById("teddyProduct")
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
                    myImg.src = response[0]["imageUrl"];
                    newTeddy.appendChild(divImg).appendChild(myImg);
                                    
                                        // fin du tableau
                    newTeddy.appendChild(teddyH3).innerHTML = response["name"];
                        // ajout tableau couleurs peluches dans les sélections 
                        for (d = 0; d < response[0]["colors"].length; d++) {
                            var x = newTeddy.appendChild(labelColor).appendChild(choiceColor)
                            var option = document.createElement("option");
                            option.text = response[0]["colors"][d];
                            option.setAttribute("value",option.text);
                            x.add(option);
    
                        };
                    newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response[0]["price"] / 100 + "euros";
                    newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response[1]["description"];
                    newTeddy.appendChild(divColor).appendChild(addTeddy).innerHTML = "Ajouter au panier"
                    // fin ajout d'éléments  dynamiques


                    // ajout liste des différentes peluches à droite de la description des produits
                    for (i = 0; i < response.length; i++) {
                        let elt = document.getElementById("listTeddy")
                        let NameTeddy = document.createElement("h3");
                        let lienId = document.createElement("a");
                        data = lienId.setAttribute('data_id', response[i]["_id"]);
                        NameTeddy.classList.add("list-group-item", "active");
                        elt.appendChild(lienId).appendChild(NameTeddy).innerHTML = response[i]["name"];
                   
                    }
                    elt.addEventListener("click", function () {
                        event.preventDefault;
                        myImg.src = response[1]["imageUrl"];
                        newTeddy.appendChild(divImg).appendChild(myImg);
                        newTeddy.appendChild(teddyH3).innerHTML = response[lienId]["name"];
                        newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response[1]["price"] / 100 + "euros";
                        newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response[1]["description"];
                        newTeddy.appendChild(divColor).appendChild(addTeddy).innerHTML = "Ajouter au panier"
                    })


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