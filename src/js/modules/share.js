var $ = require('../vendor/jquery.js');

var pageUrl = window.location.href.split('#')[0],
    title = 'Inside the CIA\'s black site torture room';

module.exports =  {
    init: function() {
        this.setLinks('.cia-share');
    },

    setLinks: function(parent) {
        $(parent + ' .cia-share__button--twitter a').attr('href', this.getTwitterLink());
        $(parent + ' .cia-share__button--facebook a').attr('href', this.getFacebookLink());
        $(parent + ' .cia-share__button--email a').attr('href', this.getEmailLink());
        console.log(this.getTwitterLink());
    },

    getTwitterLink: function() {
        return 'https://twitter.com/intent/tweet?text=' + encodeURI(title) + 
                '&url=' + encodeURIComponent(pageUrl + '?CMP=share_btn_tw');
    },

    getFacebookLink: function(withId) {
        return 'https://www.facebook.com/dialog/share?app_id=180444840287&href=' + encodeURIComponent(pageUrl + '?CMP=share_btn_fb');
    },

    getEmailLink: function(withId) {
        return 'mailto:?subject=' + encodeURIComponent(title) +
                '&body=' + encodeURIComponent(pageUrl + '?CMP=share_btn_link');
    }
};