import {model} from 'backbone';
import Cookie from 'js-cookie'

const CookieConfig = Backbone.Model.extend({

    initialize: function () {
        this.fetch();
        this.on('change', this.save, this);
    },

    fetch: function () {
        console.log("===== FETCH FIRED LOADING COOKIE ====");
        Cookie.getJSON('config');
        //console.log(Cookie.getJSON('config'));
        if(Cookie.getJSON('config')){
            this.set(Cookie.getJSON('config'));
        }
    },

    save: function (attributes) {
        console.log("===== CHANGE FIRED SAVING COOKIE ====");
        Cookie.set('config', this.attributes);
    },

    remove: function (options) {
        Cookie.remove('config');
    },

    hasValue: function () {
        return this.has('diapers');
    }
});
export default CookieConfig;