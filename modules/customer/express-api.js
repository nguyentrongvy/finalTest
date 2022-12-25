const customerController = require('./controller');

exports.load = app => {
    app.post(
        '/customers',
        customerController.createCustomers,
    );
}