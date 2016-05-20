'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on digicore-payment-protocol Module: {0}'
};

module.exports = require('digicore-lib').errors.extend(spec);
