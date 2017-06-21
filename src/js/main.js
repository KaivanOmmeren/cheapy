import _ from 'underscore';
import {Events} from 'backbone';
import CookieConfig from './models/CookieConfig';
import CookieConfigView from './views/CookieConfigView';
import ConfigButtonView from './views/ConfigButtonView';
import SelectBlockView from './views/SelectBlockView';
import DropdownView from './views/DropdownView';
import ProductsCollection from './collections/ProductsCollection';
import Products from './models/Products';
import ProductsUrls from './models/ProductsUrls';
import ProductsCollectionView from './views/ProductsCollectionView';

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function () {
        setGlobalVariables();
        let ProductsUrlsModel = new ProductsUrls();
        let ProductsCollectionModel = new ProductsCollection();
        let ProductsModel = new Products();
        let CookieConfigModel = new CookieConfig();
        new CookieConfigView({el: ".blue", model: CookieConfigModel});
        new ConfigButtonView({el: '#configButton'});
        new SelectBlockView({el: '.selectBlock'});
        new DropdownView({el: '.dropdown-menu li a'});
        new ProductsCollectionView({el: '#results', collection: ProductsCollectionModel, model: ProductsModel, modelUrls: ProductsUrlsModel, modelCookie: CookieConfigModel});
        Backbone.history.start({pushState: true, root: '/'});
    };
    window.addEventListener('load', init);
})();