const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const db = require("./config/db");

db.authenticate()
  .then(() => {
    console.log(
      "Connection with postgresql has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const usersRouter = require("./routes/item");

app.use("/api/item", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
