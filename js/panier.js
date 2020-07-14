let monstockage = localStorage;
let panier = document.getElementById("panier")
let newPanier = document.createElement("div")
newPanier.classList.add("row");
let divRemove =  document.createElement("div")
divRemove.classList.add ("row")
let remove = document.createElement("div");
let a = document.createElement("a")
remove.classList.add("col-4");
let imgTeddy = new Image() 
imgTeddy.addEventListener('load', function () { });
imgTeddy.src = monstockage.getItem("imageURL");
let divImg = document.createElement("div")
divImg.classList.add("col-lg-3");
let divPrice = document.createElement("div");
divPrice.classList.add("col-lg-3","my-5");
let divAmount = document.createElement("div");
divAmount.classList.add("col-lg-3","my-5")
let articleName = document.createElement("div");
articleName.classList.add("col-lg-3","my-5");
if (monstockage.getItem("imageURL")){
panier.appendChild(newPanier).appendChild(divImg).appendChild(imgTeddy);
};
if(monstockage.getItem("articleName")){
panier.appendChild(newPanier).appendChild(articleName).innerHTML = monstockage.getItem("articleName");
};
if(monstockage.getItem("amount")){
panier.appendChild(newPanier).appendChild(divAmount).innerHTML = "Quantité : " + monstockage.getItem("amount");
}
else{ 
    panier.appendChild(newPanier).appendChild(divAmount).innerHTML = "Quantité : 0 ";

};
if ( monstockage.getItem("price")){
panier.appendChild(newPanier).appendChild(divPrice).innerHTML = "Prix : " + monstockage.getItem("price") + ' euros';
}
else{
    panier.appendChild(newPanier).appendChild(divPrice).innerHTML = "Prix : 0 euros";
};

if (monstockage.getItem("amount")){
    panier.appendChild(divRemove).appendChild(remove).appendChild(a).innerHTML = "supprimer panier";
    remove.addEventListener("click",function(event){
        monstockage.clear();
        event.preventDefault();
    });
}




