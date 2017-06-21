import {view} from 'backbone';

const SelectBlockView = Backbone.View.extend({
    initialize: function () {
        App.events.on('configButtonTriggered', this.removeAllSelected, this);
        App.events.on('removeAllSelectedItems', this.removeAllSelected, this);
        App.events.on('reAddSelectedClass', this.reAddSelectedClass, this);
    },
    events: {
        'click': 'clickHandler',
    },

    clickHandler: function (e) {
        let element = e.currentTarget;
        $(element).toggleClass('selectBlockClicked');
        if ($('.selectBlockClicked').length > 1) {
            this.removeAllSelected();
            $(element).toggleClass('selectBlockClicked');
        }
        if ($(element).hasClass('selectBlockClicked')) {
            App.events.trigger($(element).attr("id"));
        }
        this.noneSelected();
    },

    removeAllSelected: function () {
        for (let item of $('.selectBlockClicked')) {
            $(item).removeClass('selectBlockClicked');
        }
        App.events.trigger('selectedRemoved');
        //console.log('selectedRemoved triggered');
    },

    noneSelected: function () {
        if ($('.selectBlockClicked').length === 0) {
            App.events.trigger('noneSelected');
            //console.log('there are no items selected');
        }
    },
    reAddSelectedClass: function (data) {
        switch(data.product) {
            case 'diapers': {
                $('#blockDiapers').toggleClass('selectBlockClicked');
                //console.log('readding selected class to diapers');
                break;
            }
            case 'milk': {
                $('#blockMilk').toggleClass('selectBlockClicked');
                //console.log('readding selected classs to milk');
                break;
            }
            case 'babyWipes': {
                $('#blockBabyWipes').toggleClass('selectBlockClicked');
                //console.log('readding selected classs to babyWipes');
                break;
            }
        }
    }

});
export default SelectBlockView;