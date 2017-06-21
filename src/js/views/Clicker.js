import {View} from 'backbone';

const Clicker = View.extend({
    events: {
        'click': 'clickHandler'
    },

    clickHandler: function(e)
    {
        e.preventDefault();
        this.model.set({blueColor: !this.model.get('blueColor')});
        App.events.trigger("boxChange");
        //console.log(this.model.get('url'));
    }
});

export default Clicker;
