

          elt.appendChild(newDiv).appendChild(immageTeddy)= response[i]["imageUrl"]
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        var response = JSON.parse(this.responseText);
        let elt = document.getElementById("teddy");
        elt.appendChild(nameTeddy).innerHTML = response[i]["name"];
      
    }
};
    request.open('GET', 'http://localhost:3000/api/teddies');
    request.send();