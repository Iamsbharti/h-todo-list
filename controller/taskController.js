const { formatResponse } = require("../library/formatResponse");

const testApiControl = async (req, res) => {
  console.log("Test API Control:");
  res.status(200).json(formatResponse(200, "Hi there!!", "PING SUCCESS"));
};
module.exports = {
  testApiControl,
};
