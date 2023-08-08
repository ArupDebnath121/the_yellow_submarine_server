"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const the_yellow_submarine_server = (0, _express.default)();
the_yellow_submarine_server.use(_express.default.json());
the_yellow_submarine_server.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});
const PORT = 4000;
the_yellow_submarine_server.listen(PORT, () => {
  console.log("Server is running !!!");
});