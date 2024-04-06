const { authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");

module.exports = function(app) {
  // Create customer api
  app.post(
    "/api/admin/customer/create",
    [authJwt.verifyToken],
    controller.createCustomer
  );

  // Get customer list api
  app.get(
    "/api/admin/customer/get",
    [authJwt.verifyToken],
    controller.getCustomerList
  );

  // Delete customer list api
  app.post(
    "/api/admin/customer/delete",
    [authJwt.verifyToken],
    controller.deleteCustomer
  );

  // Update customer list api
  app.post(
    "/api/admin/customer/update",
    [authJwt.verifyToken],
    controller.updateCustomer
  );

  // Get customer with id api
  app.post(
    "/api/admin/customer/getCustomerWithId",
    [authJwt.verifyToken],
    controller.getCustomerWithId
  );


};