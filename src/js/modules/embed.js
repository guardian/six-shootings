var $ = require('../vendor/jquery');

var width;

module.exports = {
    init: function() {
        $(document).ready(function() {
            this.positionEmbed();
            this.bindings();
        }.bind(this));
    },

    bindings: function() {
        $(window).resize(function() {
            this.positionEmbed();
        }.bind(this));
    },

    positionEmbed: function() {
        if ($(window).width() > 720) {
            $('.element--thumbnail').detach().insertAfter('.element-atom');
        } else {
            $('.element--thumbnail').detach().insertBefore('.element--showcase:first');
        }
    }
}
