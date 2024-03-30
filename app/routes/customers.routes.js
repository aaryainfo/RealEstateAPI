const { authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");

module.exports = function(app) {
  // Create customer api
  app.post(
    "/api/admin/customer/create",
    [],
    controller.createCustomer
  );

  // Get customer list api
  app.get(
    "/api/admin/customer/get",
    controller.getCustomerList
  );

  // Delete customer list api
  app.post(
    "/api/admin/customer/delete",
    controller.deleteCustomer
  );

  // Update customer list api
  app.post(
    "/api/admin/customer/update",
    controller.updateCustomer
  );


};