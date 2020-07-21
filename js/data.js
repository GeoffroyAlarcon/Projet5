
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