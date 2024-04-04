const { authJwt } = require("../middleware");
const controller = require("../controllers/blog.controller");

module.exports = function(app) {
  // app.use(function(req, res, next) {
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, Content-Type, Accept"
  //   );
  //   next();
  // });

  // app.get("/api/test/all", controller.allAccess);

  // app.get(
  //   "/api/test/user",
  //   [authJwt.verifyToken],
  //   controller.userBoard
  // );

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/test/admin",
  //   // [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );

  // my api's

  // Create blog api
  app.post(
    "/api/admin/blog/create",
    [authJwt.verifyToken],
    controller.createBlog
  );

  // Get blog list api
  app.get(
    "/api/admin/blog/get",
    [authJwt.verifyToken],
    controller.getBlogList
  );

  // Delete blog list api
  app.post(
    "/api/admin/blog/delete",
    [authJwt.verifyToken],
    controller.deleteBlog
  );

  // Update blog list api
  app.post(
    "/api/admin/blog/update",
    [authJwt.verifyToken],
    controller.updateBlog
  );

  // Get blog with id api
  app.get(
    "/api/admin/blog/getBlogWithId",
    [authJwt.verifyToken],
    controller.getBlogWithId
  );



};