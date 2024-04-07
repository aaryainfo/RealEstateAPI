const { authJwt } = require("../middleware");
const controller = require("../controllers/enquiry.controller");

module.exports = function(app) {
  // Create enquiry api
  app.post(
    "/api/admin/enquiry/create",
    [authJwt.verifyToken],
    controller.createEnquiry
  );

  // Get enquiry list api
  app.get(
    "/api/admin/enquiry/get",
    [authJwt.verifyToken],
    controller.getEnquiryList
  );

  // Delete enquiry list api
  app.post(
    "/api/admin/enquiry/delete",
    [authJwt.verifyToken],
    controller.deleteEnquiry
  );

  // Update enquiry list api
  app.post(
    "/api/admin/enquiry/update",
    [authJwt.verifyToken],
    controller.updateEnquiry
  );

  // Get enquiry with id api
  app.post(
    "/api/admin/enquiry/getEnquiryWithId",
    [authJwt.verifyToken],
    controller.getEnquiryWithId
  );


};