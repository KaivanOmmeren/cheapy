import BaseView from "./BaseView";

const SelectBlockView = BaseView.extend({
    initialize: function () {
        App.events.on('configButtonTriggered', this.removeAllSelected, this);
        App.events.on('removeAllSelectedItems', this.removeAllSelected, this);
        App.events.on('reAddSelectedClass', this.reAddSelectedClass, this);
    },
    events: {
        'click': 'clickHandler',
    },

    /**
     * Checks which select block is selected and adds the selected class making it bigger so the user sees its selected
     * When a block is selected an event is trigger to load the selected data
     */
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

    /**
     * Removes all the selected classes
     */
    removeAllSelected: function () {
        for (let item of $('.selectBlockClicked')) {
            $(item).removeClass('selectBlockClicked');
        }
        App.events.trigger('selectedRemoved');
    },

    /**
     * Checks if there are no blocks selected and triggers an event
     */
    noneSelected: function () {
        if ($('.selectBlockClicked').length === 0) {
            App.events.trigger('noneSelected');
        }
    },

    /**
     * Reselects a block automatically
     */
    reAddSelectedClass: function (data) {
        switch(data.product) {
            case 'diapers': {
                $('#blockDiapers').toggleClass('selectBlockClicked');
                break;
            }
            case 'milk': {
                $('#blockMilk').toggleClass('selectBlockClicked');
                break;
            }
            case 'babyWipes': {
                $('#blockBabyWipes').toggleClass('selectBlockClicked');
                break;
            }
        }
    }

});
export default SelectBlockView;