const router = require("express").Router();
const usersController = require("../../controllers/usersController");


// The /users comes from the 'router.use("/users",userRoutes) line
// in the index.js file

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
