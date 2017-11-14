var $ = require('../vendor/jquery');

var scrollTop, height, quoteHeight;

module.exports = {
    init: function() {
        this.bindings();
        this.setValues();
        this.checkEntries();
    },

    addClasses: function() {
        $('.six__quote').addClass('is-visible');
    }
}