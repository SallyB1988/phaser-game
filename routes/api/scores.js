const router = require("express").Router();
const scoresController = require("../../controllers/scoresController");


// The /scores comes from the 'router.use("/scores",scoreRoutes) line
// in the index.js file in the routes/api folder
// The /api comes from the 'router.use("/api", apiRoutes) line in the
// index.js file in the routes folder

// Matches with "/api/scores"
router
  .route("/")
  .get(scoresController.findAll);

module.exports = router;
