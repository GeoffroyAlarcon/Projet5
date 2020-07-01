class teddy {
    constructor(_id, name, price, description, imageURL, color) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
        this.color = color;
    }
};
const Norbert = new teddy("5be9c8541c9d440000665243", "Norbert", 2900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_1.jpg", ["white", "tan", "chocolate", "black"])
const Arnold = new teddy("5beaa8bf1c9d440000a57d94", "Arnold", 3900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_2.jpg", ["Pale brown", "Dark brown", "White"]);
const lennyAndCarl = new teddy("5beaaa8f1c9d440000a57d95", "Lenny and Carl", 5900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_3.jpg", ["Brown"]);
const gustav = new teddy("5beaabe91c9d440000a57d96", "Gustav", 4500, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_4.jpg", ["Brown", "Blue", "Pink"]);
const Garfunkel = new teddy("5beaacd41c9d440000a57d97", "Garfunkel", 5500, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "http://localhost:3000/images/teddy_5.jpg", ["Beige", "Tan", "Chocolate"]);


let commandNorbert = document.getElementById("commandNorbert");
commandNorbert.addEventListener("submit", function(){
event.preventDefault();
});