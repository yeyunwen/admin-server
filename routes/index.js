var express = require("express");
var router = express.Router();

const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

router.post("/login", function (req, res, next) {
  const { username } = req.body;
  const token = tokens[username];

  if (token) {
    sendData = {
      code: 200,
      data: token,
    };
  } else {
    sendData = {
      code: 400,
      msg: "账号或密码不正确",
    };
  }

  res.send(sendData);
});

module.exports = router;
