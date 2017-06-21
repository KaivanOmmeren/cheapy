import {model} from 'backbone'
import Products from '../models/Products';
const ProductsCollection = Backbone.Collection.extend({
    initialize: function () {
        //this.render();
    },
    // setModel: function (model) {
    //     this.model = model;
    // }
});

export default ProductsCollection