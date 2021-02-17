const router = require("express").Router();
const tasks = require("../controller/taskController");

// ping test
router.get("/ping", tasks.testApiControl);

module.exports = router;
