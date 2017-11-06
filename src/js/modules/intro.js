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

        $(window).resize(function() {
            this.setValues();
            this.reCalcHeights();
        }.bind(this));
    },

    setValues: function() {
        scrollTop = $(window).scrollTop();
        height = $(window).height();
    },

    checkEntries: function() {
        $('.cia__entry').each(function(index, value) {
            if (scrollTop > $(value).offset().top - ((height / 4) * 3)) {
                if (!$(value).hasClass('is-visible')) {
                    if (!$('.is-typing').length) {
                        this.typeEntry(value);
                    }
                }
            }
        }.bind(this));
    },

    typeEntry: function(entry) {
        var copy = $(entry).text();
        var typed = 0;

        $('.is-latest').removeClass('is-latest');
        $(entry).height($(entry).height());
        $(entry).text('');
        $(entry).addClass('is-visible');
        $(entry).addClass('is-typing');

        var interval = setInterval(function() {
            var newChar = copy.substring(typed, typed + 1);
            if (newChar === '*') {
                newChar = '<span class=\'cia__pixels cia__pixels--' + Math.floor((Math.random() * 6) + 1) +'\'>*</span>';
            }

            typed++;

            if (newChar === '/') {
                $(entry).html('<span class=\'cia__date\'>' + $(entry).html() + '</span>');
                $(entry).removeClass('has-date');
            } else {
                $(entry).html($(entry).html() + newChar);
            }

            if (typed === copy.length) {
                clearInterval(interval);
                $(entry).removeClass('is-typing');
                $(entry).addClass('is-latest');
                this.checkEntries();
            }
        }.bind(this), 15);
    },

    reCalcHeights: function() {
        $('.cia__entry').each(function(index, value) {
            $(value).attr('style', '');
            $(value).height($(value).height());
        });
    }
}