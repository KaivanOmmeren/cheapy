// import {view} from 'backbone';
// import _ from 'underscore';
// import ProductsCollection from '../collections/ProductsCollection';
//
// const ProductsView = Backbone.View.extend({
//     templateProducts: '',
//     templateError: '',
//     productsCollection: '',
//     initialize: function (options) {
//         this.modelUrls = options.modelUrls;
//         this.modelCookie = options.modelCookie;
//         this.templateProducts = _.template(this.$('#template-products').html());
//         this.templateError = _.template(this.$('#template-error').html());
//         App.events.on('blockDiapers', this.getDataDiapers, this);
//         App.events.on('blockMilk', this.getDataMilk, this);
//         App.events.on('blockBabyWipes', this.getDataBabyWipes, this);
//         App.events.on('noneSelected', this.clearAll, this);
//         this.productsCollection = new ProductsCollection();
//     },
//
//     getDataDiapers: function () {
//         if (this.modelCookie.hasValue()) {
//             let products = this.modelUrls.diapers;
//             let brand = this.modelCookie.get('diapers');
//             //console.log(brand);
//             let diaperSize = this.modelCookie.get('size');
//             for (let product of products) {
//                 if (product.brand == brand && product.size == diaperSize) {
//                     this.loadProducts(product.urls);
//                 }
//             }
//             this.animate();
//         } else {
//             alert('vul eerst alle velden in');
//             App.events.trigger('removeAllSelectedItems');
//         }
//     },
//     getDataMilk: function () {
//         if (this.modelCookie.hasValue()) {
//             let products = this.modelUrls.milk;
//             let brand = this.modelCookie.get('milk');
//             for (let product of products) {
//                 if (product.brand == brand) {
//                     this.loadProducts(product.urls);
//                 }
//             }
//             this.animate();
//         } else {
//             alert('vul eerst alle velden in');
//             App.events.trigger('removeAllSelectedItems');
//         }
//     },
//     getDataBabyWipes: function () {
//         if (this.modelCookie.hasValue()) {
//             let products = this.modelUrls.babyWipes;
//             let brand = this.modelCookie.get('babyWipes');
//             for (let product of products) {
//                 if (product.brand == brand) {
//                     this.loadProducts(product.urls);
//                 }
//             }
//             this.animate();
//         } else {
//             alert('vul eerst alle velden in');
//             App.events.trigger('removeAllSelectedItems');
//         }
//     },
//     loadProducts: function (url) {
//         if (url.length == 0) {
//             this.noItemHandler();
//             return;
//         }
//
//         for (let singleURL of url) {
//             //console.log(singleURL);
//             this.modelUrls.fetch({
//                 url: singleURL,
//                 success: (model, response, options) => this.loadProductsSuccessHandler(model, response, options),
//                 error: (model, response, options) => this.loadProductsErrorHandler(model, response, options)
//             });
//         }
//     },
//     loadProductsSuccessHandler: function (model, response, options) {
//         this.model.set({
//             title: response.products[0].title,
//             summary: response.products[0].summary,
//             imageUrl: response.products[0].images[4].url,
//             price: response.products[0].offerData.offers[0].price,
//             pieces: response.products[0].attributeGroups[2].attributes[0].value,
//             pricePerPiece: (response.products[0].offerData.offers[0].price / parseInt(response.products[0].attributeGroups[2].attributes[0].value)).toFixed(2),
//             availabilityDescription: response.products[0].offerData.offers[0].availabilityDescription,
//             url: response.products[0].urls[0].value,
//             displayName: response.products[0].offerData.offers[0].seller.displayName,
//             sellerUrl: response.products[0].offerData.offers[0].seller.url
//         });
//         this.productsCollection.push(this.model.attributes);
//         this.$el.html(this.templateProducts({products: this.productsCollection.models}));
//         this.render();
//     },
//
//     /**
//      * @param model
//      * @param response  * @param options  */
//     loadProductsErrorHandler: function (model, response, options) {
//         // console.dir(model);
//         //console.dir(response);
//         //console.dir(options);
//         console.log('ERRORR');
//     },
//
//     noItemHandler: function () {
//         this.$el.html(this.templateError({message: 'Er zijn geen producten gevonden met uw criteria'}));
//     },
//     render: function () {
//         // this.productsCollection.forEach(function (Product) {
//         //     this.$el.html(this.templateProducts({products: this.productsCollection}));
//         // })
//         // let $left = $('<div id="resultsLeft"></div>');
//         // let $center = $('<div id="resultsCenter"></div>');
//         // let $right = $('<div id="resultsRight"></div>');
//         // $left.append($('<img>').attr('src', this.model.attributes.imageUrl));
//         // $left.append($('<h3></h3>').html('Bestel online bij:' + '<br><br>'));
//         // $left.append($('<a></a>').attr('href', this.model.attributes.url).attr('target', '_blank').append($('<h3></h3>').html(this.model.attributes.displayName + '<br>')));
//         // $left.append($('<p></p>').html(this.model.attributes.availabilityDescription));
//         // $center.append($('<h3></h3>').html(this.model.attributes.title + '<br><br>'));
//         // $center.append($('<p></p>').html(this.model.attributes.summary));
//         // $right.append($('<h3></h3>').html('&euro; ' + this.model.attributes.price + '<br><br><br>'));
//         // $right.append($('<p></p>').html('&euro; ' + this.model.attributes.pricePerPiece + ' per stuk'));
//         // this.$el.append($left);
//         // this.$el.append($center);
//         // this.$el.append($right);
//         //this.$el.html(this.templateProducts({products: this.model}));
//     },
//     animate: function () {
//         this.$el.animate({
//             'opacity': '1',
//             'margin-top': "-=165px",
//             'height': '400px'
//         }, 'slow');
//     },
//
//     clearAll: function () {
//         this.$el.empty();
//         this.productsCollection.reset();
//         this.$el.animate({
//             'opacity': '0',
//             'margin-top': "0",
//         }, 'fast');
//     }
// });
// export default ProductsView