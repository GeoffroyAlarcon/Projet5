let p = document.createElement ("p")
if (sessionStorage.getItem("newArticle")){
newArticle = sessionStorage.getItem("newArticle");
 localStorage.setItem("Ori" + localStorage.length++,newArticle);
}
else{
let cart = document.getElementById("cart");
p.classList.add ("text-center")
cart.appendChild(p).innerHTML = " Votre panier est vide";
}
