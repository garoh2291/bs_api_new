const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 3062;
const mongo_url = process.env.MONGODB_URI;

async function start() {
  mongoose.set("strictQuery", true);
  mongoose.connect(mongo_url, {
    useNewUrlParser: true,
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

start();
