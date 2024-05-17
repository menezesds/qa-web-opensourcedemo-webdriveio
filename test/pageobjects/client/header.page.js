const Page = require('../page');

class Header extends Page {
    get headerUserArea () {
        return $('//*[@class="oxd-topbar-header-userarea"]');
    };
};

module.exports = new Header();