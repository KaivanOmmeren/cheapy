import {model} from 'backbone'
const Products = Backbone.Model.extend({
    id: "",
    title: "",
    summary: "",
    imageUrl: "",
    price: 0,
    pieces: "",
    pricePerPiece: 0,
    availabilityDescription: "",
    url: "",
    displayName: "",
    sellerUrl: ""
});

export default Products