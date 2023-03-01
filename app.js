const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("./routes/users");
const eventRouter = require("./routes/events");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/events", eventRouter);

module.exports = app;
