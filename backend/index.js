const express = require("express");
const PORT = 8000;
const mongoose = require("mongoose");
const dbConnection = require("./database/db");
const { route } = require("./routes/auth-routes");
const router = require("./routes/auth-routes");
require("dotenv").config(); // Load environment variables
const router1 = require("./routes/home-route");
const router2 = require("./routes/admin-route");

const app = express();
app.use(express.json());

//database connection
dbConnection();

app.use("/api/auth", router);
app.use("/api/home", router1);
app.use("/api/admin", router2);

//middleware

app.listen(PORT, () => {
  console.log(`Server is successfully running in PORT ${PORT}`);
});
