const customersRepository = require('./repository');
const httpHelper = require('../../helpers/http.helper');

class CustomerService {
    async createCustomers() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const customers = await httpHelper.get(url);

        if (!customers || customers.length === 0) return;

        let promises = [];
        for (const customer of customers) {
            promises.push(customersRepository.create({
                customerId: customer.id,
            }));

            if (promises.length === 1000) {
                await Promise.all(promises);
                promises = [];
            }
        }

        if (promises.length === 0) return;

        return Promise.all(promises);
    }
};

module.exports = new CustomerService();