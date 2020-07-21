

let p = document.createElement("p");


if (sessionStorage.getItem("newArticle")) {
    let session = sessionStorage.getItem("newArticle");
    localStorage.setItem("Ori" + localStorage.length++, session);

    sessionStorage.removeItem("newArticle");
    sessionStorage.removeItem("color");
    sessionStorage.removeItem("amount");
}
// initialisation JSON.PARSE + localisation ID Panier

if (localStorage) {
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
        sessionStorage.setItem("test", newArticle["price"]);     
    }
    // Création de l'élément prix total // 
    let elt = document.getElementById("cart");
    let divTotalPrice = document.createElement("div");
    divTotalPrice.classList.add("text-center");


    if (sessionStorage.length <= 1) {
 sessionStorage.setItem("totalPrice",sessionStorage.getItem("test"));
 sessionStorage.removeItem("test");
    }
    else {
        sessionStorage.setItem("totalPrice",JSON.parse(sessionStorage.getItem("totalPrice")) +  JSON.parse(sessionStorage.getItem("test")));
        sessionStorage.removeItem("test");
    }
    elt.appendChild(divTotalPrice).innerHTML = "prix total de la commande = " +sessionStorage.getItem("totalPrice");
};