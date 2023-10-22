var express = require("express");
var router = express.Router();

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor",
  },
};

/* GET users listing. */
router.get("/me", function (req, res, next) {
  const data = users[req.headers.authorization];
  if (data) {
    res.send({
      code: 200,
      data,
    });
  } else {
    res.send({
      code: 401,
      msg: "no-authorization",
    });
  }
});

module.exports = router;
