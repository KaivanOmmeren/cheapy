import BaseView from "./BaseView";

/**
 * Handels the config button and makes the configuration bar visible
 */
const ConfigButtonView = BaseView.extend({
    events: {
        'click': 'clickHandler'
    },

    clickHandler: function (e) {
        App.events.trigger('configButtonTriggered', {
            triggered: true
        });
        $('#blockDiapers').animate({
            top: "+=190px"
        }, {
            duration: 300
        });
        $('#blockMilk').animate({
            top: "+=190px"
        }, {
            duration: 400
        });
        $('#blockBabyWipes').animate({
            top: "+=190px"
        }, {
            duration: 500
        });
        $('#select-brands').animate({
            'opacity': '1',
            'margin-top': "+=50px"
        }, 'slow');
        this.$el.animate({
            'opacity': '0'
        }, 'slow');
        $('#results').animate({
            'opacity': '0',
            'margin-top': "0",
            'height' : '0'
        }, 'slow')
    }
});
export default ConfigButtonView;