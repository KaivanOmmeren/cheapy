import {view} from 'backbone';

const DropdownView = Backbone.View.extend({
    events: {
        'click': 'clickHandler'
    },

    clickHandler: function (e) {
        e.preventDefault();
        let element = e.currentTarget;
        let cache = $(element).parent().parent().parent().find('.dropdown-toggle').children();
        $(element).parent().parent().parent().find('.dropdown-toggle')
            .text($(element).attr("data-value"))
            .append(cache);
        $(element).parent().parent().parent().find('.dropdown-toggle').attr("data-value", $(element).attr("data-value"));
    }

});
export default DropdownView;