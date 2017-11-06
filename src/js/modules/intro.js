var $ = require('../vendor/jquery');

var scrollTop, height;

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
    },

    checkEntries: function() {
        $('.six__quote').each(function(index, value) {
            if (scrollTop > $(value).offset().top - (height / 2)) {
                if (!$(value).hasClass('is-visible') && !$('.six__quotes').hasClass('is-animating')) {
                    $(value).addClass('is-visible');
                    $('.six__quotes').addClass('is-animating');

                    setTimeout(function() {
                        $('.six__quotes').removeClass('is-animating')
                    }, 800);
                }
            }
        }.bind(this));
    },
}