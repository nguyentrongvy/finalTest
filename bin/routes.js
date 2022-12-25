// import modules
const customerAPI = require('../modules/customer/express-api');

module.exports = app => {
    // import api
    customerAPI.load(app);
};
