const BaseController = require('../../common/base-controller');
const customerService = require('./service');

class CustomerController extends BaseController {
    async createCustomers(req, res) {
        await customerService.createCustomers();

        res.success([]);
    }
}

module.exports = new CustomerController();
