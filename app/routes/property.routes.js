const { authJwt } = require("../middleware");
const controller = require("../controllers/property.controller");

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get("/api/test/all", controller.allAccess);

  // my api's

  // Create property api
  app.post(
    "/api/admin/property/create",
    [authJwt.verifyToken],
    controller.createProperty
  );

  // Get property list api
  app.get(
    "/api/admin/property/get",
    [authJwt.verifyToken],
    controller.getPropertyList
  );

  // Delete property list api
  app.post(
    "/api/admin/property/delete",
    [authJwt.verifyToken],
    controller.deleteProperty
  );

  // Update property list api
  app.post(
    "/api/admin/property/update",
    [authJwt.verifyToken],
    controller.updateProperty
  );
};