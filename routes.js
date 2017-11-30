var path = require('path');

module.exports = function(app) {
    app.use('/api/issue', require('./api/issue'));
};