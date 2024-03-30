const { authJwt } = require("../middleware");
const controller = require("../controllers/admin.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  // my api's

  // Create property api
  app.post(
    "/api/admin/property/create",
    [
      
    ],
    controller.createProperty
  );

  // Get property list api
  app.get(
    "/api/admin/property/get",
    controller.getPropertyList
  );

  // Delete property list api
  app.post(
    "/api/admin/property/delete",
    controller.deleteProperty
  );

  // Update property list api
  app.post(
    "/api/admin/property/update",
    controller.updateProperty
  );

};