class teddy {
    constructor(id, name, price, description, imageURL, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
        this.color = color;

    }
};
const Norbert = new teddy("5be9c8541c9d440000665243", "Norbert", 2900, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","http://localhost:3000/images/teddy_1.jpg",["white","tan","chocolate","black"])
const Arnold = new teddy();
const lennyAndCarl = new teddy();
const gustav= new teddy();
const garfunkel = new teddy ();
returnAPromiseWithNumber()
    .then(function (data) { // Data is 2
        return data + 1;
    })
    .then(function (data) { // Data is 3
        throw new Error('error');
    })
    .then(function (data) {
        // Not executed  
    })
    .catch(function (err) {
        return 5;
    })
    .then(function (data) { // Data is 5
        // Do something
    });