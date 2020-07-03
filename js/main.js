function promiseGet(e) {

    return new Promise((resolve, reject) => {
        let recoverHttp = new XMLHttpRequest();
        recoverHttp.open('GET', 'http://localhost:3000/api/teddies/');
        recoverHttp.send();
        recoverHttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(XMLHttpRequest);
                    var response = JSON.parse(this.responseText);
                    for (let i = 0; i < response.length; i++) {
                        let elt = document.getElementById("teddy");
                        let imageTeddy = new Image();
                        let myImg = new Image();
                        myImg.addEventListener('load', function() {
                        });
                        myImg.src = response[i]["imageUrl"];    
                        const divRow= document.createElement("div");
                        divRow.classList.add("row","listTeddy","my-lg-4","text-white","bg-primary");
                        const divImage = document.createElement("div");
                        divImage.classList.add("col-lg-3",)
                        const newDiv = document.createElement("div");
                        newDiv.classList.add("col-lg-6", "my-5", "offset-1");
                        const nameTeddy = document.createElement("h2");
                        const priceTeddy = document.createElement("p");
                        const descriptionTeddy = document.createElement("p");
                        elt.appendChild(divRow).appendChild(divImage).appendChild(myImg);
                        elt.appendChild(divRow).appendChild(newDiv).appendChild(nameTeddy).innerHTML = response[i]["name"];
                        elt.appendChild(divRow).appendChild(newDiv).appendChild(priceTeddy).innerHTML = "prix : " + response[i]["price"] + "€";
                        elt.appendChild(divRow).appendChild(newDiv).appendChild(descriptionTeddy).innerHTML = "description :" + response[i]["description"];
                    }
                } else {
                    reject(XMLHttpRequest);
                }
            }
        }
    })
};
const promise = promiseGet();
