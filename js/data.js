    // initialisation JSON.PARSE + localisation ID Panier
    let newArticle = JSON.parse(localStorage.getItem(localStorage.key(i)));
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
    let divPrice =  document.createElement("div");
    divPrice.classList.add("col-lg-2", "text-center", "my-5");
    // ajout dinamiquement des éléments au panier.
    elt.appendChild(divNewArticle).appendChild(divIMG).appendChild(imgTeddy);
    elt.appendChild(divNewArticle).appendChild(divName).appendChild(pName).innerHTML = "Nom de l'article : " + newArticle["name"];
    elt.appendChild(divNewArticle).appendChild(divColor).innerHTML = "Couleur du modèle : " + newArticle["color"];
    elt.appendChild(divNewArticle).appendChild(divAmount).innerHTML = "Quantité : " + newArticle["amount"];
    elt.appendChild(divNewArticle).appendChild(divPrice).innerHTML = "Prix : " + newArticle["price"];
    console.log(newArticle);
}
else {
    let elt = document.getElementById("panier");
    let p = document.createElement("p");
    elt.appendChild(p).innerHTML = " Votre panier est vide ";
}
}

// création du formulaire de commande
let order = document.getElementById("order");
let labelFirstName = document.createElement("label");
let inputFirstName = document.createElement("input"); 
inputFirstName.type = text;
order.appendChild(labelFirstName).appendChild(inputFirstName).innerHTML = "Nom de famille"