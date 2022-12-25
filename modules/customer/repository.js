const BaseRepository = require('../../common/base-repository');

class CustomersRepository extends BaseRepository {
    constructor() {
        super('Customer');
    }
}

module.exports = new CustomersRepository();