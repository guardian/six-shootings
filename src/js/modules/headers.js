var $ = require('../vendor/jquery');

module.exports = {
    init: function() {
        $(document).ready(function() {
            this.enhanceHeaders();
        }.bind(this));
    },

    enhanceHeaders: function() {
        $('.content__main h2').each(function(index, element) {
            var text = $(element).text().split('.');
            console.log(text);

            if (text.length >= 5) {
                $(element).addClass('six__subhead');
                $(element).html('<strong>' + text[0] + '</strong><span>' + text[1] + '</span><location>' + text[2] + '<span>' + text[3] + '</span><br />' + text[4] + '</location>');
            }
        }.bind(this));
    }
}
