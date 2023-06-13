var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  const data = { message: "This is Post method of users" };
  res.send(data);
});

module.exports = router;
