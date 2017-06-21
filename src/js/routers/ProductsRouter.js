import {Router} from 'backbone';

const ProductsRouter = Router.extend({
    routes: {
        "luiers":           "getDiapers",
        "melk":             "getMilk",
        "baby-doekjes":     "getDataBabyWipes"
    },
    getDiapers: function () {
        App.events.trigger('getData',{
            product: 'diapers'
        });
    },
    getMilk: function () {
        App.events.trigger('getData',{
            product: 'milk'
        });
    },
    getDataBabyWipes: function () {
        App.events.trigger('getData',{
            product: 'babyWipes'
        });
    }
});
export default ProductsRouter;
