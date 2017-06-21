import BaseView from "./BaseView";

const CookieConfigView = BaseView.extend({
    initialize() {
        if (this.model.hasValue()) {
            App.events.once('noneSelected' && 'getData', this.checkForReselectBlock, this);
            this.animate();
            let cache = $('#dropdownMenuDiapers').children();
            $('#dropdownMenuDiapers').text(this.model.get('diapers')).append(cache);
            $('#dropdownMenuDiapers').attr('data-value', this.model.get('diapers')).append(cache);
            cache = $('#dropdownMenuSize').children();
            $('#dropdownMenuSize').text(this.model.get('size')).append(cache);
            $('#dropdownMenuSize').attr('data-value', this.model.get('size')).append(cache);
            cache = $('#dropdownMenuMilk').children();
            $('#dropdownMenuMilk').text(this.model.get('milk')).append(cache);
            $('#dropdownMenuMilk').attr('data-value', this.model.get('milk')).append(cache);
            cache = $('#dropdownMenuBabyWipes').children();
            $('#dropdownMenuBabyWipes').text(this.model.get('babyWipes')).append(cache);
            $('#dropdownMenuBabyWipes').attr('data-value', this.model.get('babyWipes')).append(cache);
        }
    },
    events: {
        'click': 'clickHandler'
    },
    clickHandler: function (e) {
        for (let item of $('.dropdown-toggle')){
            if($(item).attr('data-value') == 'none'){
                alert('vul alle velden in en klik op het vinkje');
                return;
            }
        }
        this.model.remove();
        this.model.set({
            diapers: $('#dropdownMenuDiapers').attr('data-value'),
            size: $('#dropdownMenuSize').attr('data-value'),
            milk: $('#dropdownMenuMilk').attr('data-value'),
            babyWipes: $('#dropdownMenuBabyWipes').attr('data-value')
        });
        // TweenMax.to('#blockDiapers', 2, {y:-190, ease:Elastic.easeOut});
        // TweenLite.to('#blockDiapers', 1, {top:"-=190px", ease:Bounce.easeOut});
        this.animate();
        App.events.trigger('configButtonTriggered', {
            triggered: false
        });
    },

    animate: function () {
        $('#blockDiapers').animate({
            top: "-=190px"
        }, {
            duration: 300,
        });
        $('#blockMilk').animate({
            top: "-=190px"
        }, {
            duration: 400
        });
        $('#blockBabyWipes').animate({
            top: "-=190px"
        }, {
            duration: 500
        });
        $('#select-brands').animate({
            'opacity': '0',
            'margin-top': "-=50px"
        }, 'slow');
        $('#configButton').animate({
            'opacity': '1'
        }, 'slow');
    },
    checkForReselectBlock: function (data) {
        //console.log('Reselect triggered');
        App.events.trigger('reselectBlock', {
            product: data.product
        });
    }
});
export default CookieConfigView;