var $ = require('../vendor/jquery.js');

var pageUrl = window.location.href.split('#')[0],
    title = 'The Strong: six stories of anguish and endurance from some of America\'s worst mass shootings';

module.exports =  {
    init: function() {
        this.setLinks('.six-share');
    },

    setLinks: function(parent) {
        $(parent + ' .six-share__button--twitter a').attr('href', this.getTwitterLink());
        $(parent + ' .six-share__button--facebook a').attr('href', this.getFacebookLink());
        $(parent + ' .six-share__button--email a').attr('href', this.getEmailLink());
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