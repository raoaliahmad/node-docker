const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT } = require("./config");

const postRouter = require("./routes/postRoutes");
const authRouter = require("./routes/authRoutes");
const app = express();

// We can just use mongo instead of the ipaddress because of the Dns we get in custom docker neworks
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Successfully connected to DB !!!"))
    .catch((err) => {
      console.log("Error While Connection, Trying again in 5 seconds", err);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// Parses incoming requests with json payload, the parsed are available as (req)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

app.use("/posts", postRouter);
app.use("/users", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
