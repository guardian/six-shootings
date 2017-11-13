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
                text = {
                    name: text[0],
                    bio: text[1],
                    incident: text[2],
                    location: text[3],
                    year: text[4]
                }

            var html = '';

            for (var i in text) {
                html += '<div class=\'six__subhead-' + i + '\'>' + text[i] + '</div>';
            }

            $(element).addClass('six__subhead');
            $(element).html(html);
        }.bind(this));
    }
}
