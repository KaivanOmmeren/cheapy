import {view} from 'backbone';

const DataLoadLink = Backbone.View.extend({
    initialize: function () {
        this.loadDiapers();
    },
    loadDiapers: function () {
        this.model.fetch({
            url: '/api/proxy?url=https://api.bol.com/catalog/v4/search?q=hiPP%20melk&offers=cheapest&includeAttributes=true&format=json&limit=100',
            success: (model, response, options) => this.loadDiapersSuccessHandler(model, response, options),
            error: (model, response, options) => this.loadDiapersErrorHandler(model, response, options)
        });

    },
    loadDiapersSuccessHandler: function (model, response, options) {
        //console.dir(model);
        console.dir(response);
        for (let obj of response.products) {
            console.log(obj.id);
        }
        //console.dir(options);
    },
    /**
     * @param model
     * @param response  * @param options  */
    loadDiapersErrorHandler: function (model, response, options) {
        //console.dir(model);
        //console.dir(response);
        //console.dir(options);
    }
});

export default DataLoadLink;