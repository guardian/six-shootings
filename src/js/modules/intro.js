var $ = require('../vendor/jquery');

var scrollTop, height, quoteHeight;

module.exports = {
    init: function() {
        this.bindings();
        this.setValues();
        this.checkEntries();
    },

    bindings: function() {
        $(window).scroll(function() {
            this.setValues();
            this.checkEntries();
        }.bind(this));
    },

    setValues: function() {
        scrollTop = $(window).scrollTop();
        height = $(window).height();
        quoteHeight = $('.six__quote--1').height();
    },

    checkEntries: function() {
        $('.six__quote').each(function(index, value) {
            if (scrollTop > $(value).offset().top - (height - quoteHeight)) {
                if (!$(value).hasClass('is-visible')) {
                    $(value).addClass('is-visible');
                }
            }
        }.bind(this));
    },
}