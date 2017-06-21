const cron = require('node-cron');
const crawler = require('crawler');

/**
 * Added because i want to crawl different sites for data in the future, currently unused
 */
module.exports = function() {
    // CRON
    cron.schedule('0 12 * * Monday', crawl);
    console.log('cron!');

    function crawl() {
        console.log('crawl!');
    }
};
