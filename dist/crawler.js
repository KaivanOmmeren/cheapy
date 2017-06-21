const cron = require('node-cron');
const crawler = require('crawler');


module.exports = function() {
    // CRON
    cron.schedule('0 12 * * Monday', crawl);
    console.log('cron!');

    function crawl() {
        console.log('crawl!');
    }
};
