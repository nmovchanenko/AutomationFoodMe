'use strict';

foodMeApp.factory('customer', function($rootScope, localStorage) {

  var LOCAL_STORAGE_ID = 'fmCustomer',
      customerString = localStorage[LOCAL_STORAGE_ID];

  var customer = customerString ? JSON.parse(customerString) : {name: "Joe Black", address: "432 Wiggly Rd, Mountain View, 94043"};

  $rootScope.$watch(function() { return customer; }, function() {
    localStorage[LOCAL_STORAGE_ID] = JSON.stringify(customer);
  }, true);

  return customer;
});
