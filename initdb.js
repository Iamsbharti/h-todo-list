const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

initdb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (error) => {
    console.log(`Error Connencting DB: ${error.message}`);
  });
  mongoose.connection.on("open", (error) => {
    error
      ? console.log(`Error Connectiong DB: ${error.message}`)
      : console.log("TODO LIST DB CONNECT SUCCESS");
  });
};

module.exports = {
  initdb,
};
