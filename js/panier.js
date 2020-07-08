
newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response[0]["price"] / 100 + "euros";

// fin ajout d'éléments  dynamiques



elt.addEventListener("click", function () {
event.preventDefault;
myImg.src = response[1]["imageUrl"];
newTeddy.appendChild(divImg).appendChild(myImg);
newTeddy.appendChild(teddyH3).innerHTML = response[lienId]["name"];

newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response[1]["description"];
newTeddy.appendChild(divColor).appendChild(addTeddy).innerHTML = "Ajouter au panier"
})