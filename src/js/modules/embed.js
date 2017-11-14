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

    }
}
