var $ = require('../vendor/jquery');

var scrollTop, height;

module.exports = {
    init: function() {
        $(document).ready(function() {
            this.enhanceCaps();
        }.bind(this));
    },

    enhanceCaps: function() {
        $('.ios .from-content-api h2, .android .from-content-api h2, .content__main h2').next().each(function(index, element) {
            if ($(element).is('p')) {
                this.enhanceCap(element);
            }
        }.bind(this));

        this.enhanceCap($('.element-atom').next());
    },

    enhanceCap: function(paragraph) {
        var html = $(paragraph).html().trim();
        $(paragraph).html('<span class="six__drop-cap"><img src="@@assetPath@@/assets/images/candle.jpg" class="six__drop-image" /><span class="six__drop-inner">' + html[0] + '</span></span>' + html.slice(1));
    }
}
