import BaseView from "./BaseView";
import _ from 'underscore';
import ProductsRouter from "../routers/ProductsRouter";

const ProductsCollectionView = BaseView.extend({
    templateProductsOverview: '',
    templateProductsDetail: '',
    templateError: '',
    resultWrapper: '',
    router: null,
    configActive: false,
    initialize: function (options) {
        this.modelUrls = options.modelUrls;
        this.modelCookie = options.modelCookie;
        this.templateProductsOverview = _.template(this.$('#template-products-overview').html());
        this.templateProductsDetail = _.template(this.$('#template-products-detail').html());
        this.templateError = _.template(this.$('#template-error').html());
        this.resultWrapper = $('.resultWrapper');
        this.router = new ProductsRouter();
        App.events.on('blockDiapers', this.getDataDiapers, this);
        App.events.on('blockMilk', this.getDataMilk, this);
        App.events.on('blockBabyWipes', this.getDataBabyWipes, this);
        App.events.on('selectedRemoved', this.clearAll, this);
        App.events.on('noneSelected', this.clearAll, this);
        App.events.on('configButtonTriggered', this.setConfigState, this);
        App.events.on('reselectBlock', this.reselectBlock, this);
    },
    events: {
        "click .resultWrapper": "detailClickHandler",
        "click .back": "backClickHandler",
    },

    /**
     * If the config button is triggered set the global bool to true so the select blocks can't be selected
     */
    setConfigState: function (data) {
        if (data.triggered === true) {
            this.configActive = true;
        } else if (data.triggered === false) {
            this.configActive = false;
        }
    },

    /**
     * Gets the url's from all the diaper products
     */
    getDataDiapers: function () {
        if (this.modelCookie.hasValue() && this.configActive === false) {
            this.router.navigate('luiers', {trigger: true, replace: true});
            let products = this.modelUrls.diapers;
            let brand = this.modelCookie.get('diapers');
            let diaperSize = this.modelCookie.get('size');
            for (let product of products) {
                if (product.brand === brand && product.size === diaperSize) {
                    this.loadProducts(product.urls, 'diapers');
                }
            }
            this.animateUp();
        } else {
            alert('vul eerst alle velden in en klik op het vinkje');
            App.events.trigger('removeAllSelectedItems');
        }
    },

    /**
     * Gets the url's from all the milk products
     */
    getDataMilk: function () {
        if (this.modelCookie.hasValue() && this.configActive === false) {
            this.router.navigate('melk', {trigger: true, replace: true});
            let products = this.modelUrls.milk;
            let brand = this.modelCookie.get('milk');
            for (let product of products) {
                if (product.brand === brand) {
                    this.loadProducts(product.urls, 'milk');
                }
            }
            this.animateUp();
        } else {
            alert('vul eerst alle velden in en klik op het vinkje');
            App.events.trigger('removeAllSelectedItems');
        }
    },

    /**
     * Gets the url's from all the baby-wipes products
     */
    getDataBabyWipes: function () {
        if (this.modelCookie.hasValue() && this.configActive === false) {
            this.router.navigate('baby-doekjes', {trigger: true, replace: true});
            let products = this.modelUrls.babyWipes;
            let brand = this.modelCookie.get('babyWipes');
            for (let product of products) {
                if (product.brand === brand) {
                    this.loadProducts(product.urls, 'babyWipes');
                }
            }
            this.animateUp();
        } else {
            alert('vul eerst alle velden in en klik op het vinkje');
            App.events.trigger('removeAllSelectedItems');
        }
    },

    /**
     * If nothing is selected but there is a category in the url, loads the items from that category
     */
    reselectBlock: function (data) {
        switch (data.product) {
            case 'diapers': {
                this.getDataDiapers();
                App.events.trigger('reAddSelectedClass', {
                    product: data.product
                });
                break;
            }
            case 'milk': {
                this.getDataMilk();
                App.events.trigger('reAddSelectedClass', {
                    product: data.product
                });
                break;
            }
            case 'babyWipes': {
                this.getDataBabyWipes();
                App.events.trigger('reAddSelectedClass', {
                    product: data.product
                });
                break;
            }
        }
    },

    /**
     * Fetches data from all the single url's
     */
    loadProducts: function (url, type) {
        if (url.length === 0) {
            this.noItemHandler();
            return;
        }
        for (let singleURL of url) {
            this.modelUrls.fetch({
                url: singleURL,
                success: (model, response, options) => this.loadProductsSuccessHandler(model, response, type),
                error: (model, response, options) => this.loadProductsErrorHandler(model, response, options)
            });
        }
    },

    /**
     * Fills the model with the response data, then adds the model to the collection, then fills the template
     */
    loadProductsSuccessHandler: function (model, response, options) {
        let pieces = 0;
        if(options === 'milk') {
            for (let attr of response.products[0].attributeGroups[0].attributes) {
                if (attr.key === 'NUMBER_PIECES_IN_PACKAGE') {
                    this.model.set({
                        pieces: attr.value
                    });
                    pieces = attr.value;
                }
            }
        } else {
            for (let attr of response.products[0].attributeGroups[2].attributes) {
                if (attr.key === 'NUMBER_PIECES_IN_PACKAGE') {
                    console.log(attr.value);
                    this.model.set({
                        pieces: attr.value
                    });
                    pieces = attr.value;
                }
            }
            for (let attr of response.products[0].attributeGroups[0].attributes) {
                if (attr.key === 'NUMBER_PIECES_IN_PACKAGE') {
                    this.model.set({
                        pieces: attr.value
                    });
                    pieces = attr.value;
                }
            }
        }
        this.model.set({
            id: response.products[0].id,
            title: response.products[0].title,
            summary: response.products[0].summary,
            imageUrl: response.products[0].images[4].url,
            price: response.products[0].offerData.offers[0].price,
            pricePerPiece: (response.products[0].offerData.offers[0].price / parseInt(pieces)).toFixed(2),
            availabilityDescription: response.products[0].offerData.offers[0].availabilityDescription,
            offerID: response.products[0].offerData.offers[0].id,
            //url: response.products[0].urls[0].value,
            url: 'https://www.bol.com/nl/order/basket/addItem.html?productId=' + response.products[0].id + '&offerId=' + response.products[0].offerData.offers[0].id + '&quantity=1',
            displayName: response.products[0].offerData.offers[0].seller.displayName,
            sellerUrl: response.products[0].offerData.offers[0].seller.url
        });
        this.collection.push(this.model.attributes);
        this.collection.comparator = "pricePerPiece";
        this.collection.sort();
        this.$el.html(this.templateProductsOverview({products: this.collection.models}));
    },

    /**
     * Error handler
     */
    loadProductsErrorHandler: function (model, response, options) {
        // console.dir(model);
        //console.dir(response);
        //console.dir(options);
        console.log('ERRORR');
    },

    /**
     * If there are no items based on the user's input, gives a message in the error template
     */
    noItemHandler: function () {
        this.$el.html(this.templateError({message: 'Er zijn geen producten gevonden met uw criteria'}));
    },

    /**
     * If an item in the overview is clicked loads the detail page for that item
     */
    detailClickHandler: function (e) {
        let element = e.currentTarget;
        let product = this.collection.get(element.dataset['id']);
        this.animateDown();
        this.$el.html(this.templateProductsDetail({product: product}));
        this.animateUp();
    },

    /**
     * Goes back from the detail page to the overview page
     */
    backClickHandler: function () {
        this.animateDown();
        this.$el.html(this.templateProductsOverview({products: this.collection.models}));
        this.animateUp();
    },

    /**
     * Animates the results block up
     */
    animateUp: function () {
        this.$el.animate({
            'opacity': '1',
            'margin-top': "-=165px",
            'height': '400px'
        }, 'slow');
    },

    /**
     * Animates the results block down
     */
    animateDown: function () {
        this.$el.animate({
            'opacity': '0',
            'margin-top': "0",
        }, 'fast');
    },

    /**
     * Removes all the results from the collection
     */
    clearAll: function () {
        this.collection.reset();
        this.animateDown();
    }
});
export default ProductsCollectionView