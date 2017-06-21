import {model} from 'backbone';
import Cookie from 'js-cookie'

const CookieConfig = Backbone.Model.extend({

    initialize: function () {
        this.fetch();
        this.on('change', this.save, this);
    },
    /**
     * Checks if cookie exists and sets the cookie
     */
    fetch: function () {
        console.log("===== FETCH FIRED LOADING COOKIE ====");
        Cookie.getJSON('config');
        if(Cookie.getJSON('config')){
            this.set(Cookie.getJSON('config'));
        }
    },

    /**
     * Saves the cookie
     */
    save: function (attributes) {
        console.log("===== CHANGE FIRED SAVING COOKIE ====");
        Cookie.set('config', this.attributes);
    },

    /**
     * Removes the cookie
     */
    remove: function (options) {
        Cookie.remove('config');
    },

    /**
     * Checks if the cookie has a value
     */
    hasValue: function () {
        return this.has('diapers');
    }
});
export default CookieConfig;