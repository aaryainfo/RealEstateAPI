const { authJwt } = require("../middleware");
const controller = require("../controllers/blog.controller");

module.exports = function(app) {

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
  app.post(
    "/api/admin/blog/getBlogWithId",
    [authJwt.verifyToken],
    controller.getBlogWithId
  );



};