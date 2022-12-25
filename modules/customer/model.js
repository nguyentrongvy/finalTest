const BaseModel = require('../../common/base-model');

const CustomerModel = new BaseModel({
    modelName: 'Customer',
    options: {
        collection: 'customers',
    },
    schema: {
        customerId: {
            type: String,
            minlength: 1,
            maxlength: 100,
        },
    },
});

module.exports = CustomerModel;
