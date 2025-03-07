const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/api/users");
const packages = require("./routes/api/packages");
const port = require("./config/keys").port;
const mongoURI = require("./config/keys").mongoURI;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/packages", packages);
app.use("/api/users", users);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
