const { authJwt } = require("../middleware");
const controller = require("../controllers/webuser.controller");

module.exports = function(app) {
  // Create webuser api
  app.post(
    "/api/admin/webuser/create",
    [authJwt.verifyToken],
    controller.createWebuser
  );

  // Get webuser list api
  app.get(
    "/api/admin/webuser/get",
    [authJwt.verifyToken],
    controller.getWebuserList
  );

  // Delete webuser list api
  app.post(
    "/api/admin/webuser/delete",
    [authJwt.verifyToken],
    controller.deleteWebuser
  );

  // Update webuser list api
  app.post(
    "/api/admin/webuser/update",
    [authJwt.verifyToken],
    controller.updateWebuser
  );

  // Get webuser with id api
  app.post(
    "/api/admin/webuser/getWebuserWithId",
    [authJwt.verifyToken],
    controller.getWebuserWithId
  );


};