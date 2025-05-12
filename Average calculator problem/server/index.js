const express = require("express");
const app = express();
const cors = require("cors");
const stockRoutes = require("./routes/stocks");

//middleware
app.use(cors());
app.use(express.json());
app.use("/", stockRoutes);


app.listen(5000, () => {
  console.log("Server is listening on 5000");
});
