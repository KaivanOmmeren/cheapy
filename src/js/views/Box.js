import {View} from 'backbone';

const Box = View.extend({
    initialize: function ()
    {
        this.model.on("change:blueColor", this.changeColor, this);
        //App.events.on('boxChange', this.changeColor, this);

    },
    /**
     * Toggle color by class
     */
    changeColor: function (model, blueColor)
    {
        if(blueColor){
            this.$el.addClass("blue");
        } else {
            this.$el.removeClass('blue');
        }

    }
});

export default Box;