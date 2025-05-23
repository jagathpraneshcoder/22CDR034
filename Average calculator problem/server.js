const express = require("express");
const app = express();
const cors = require("cors");
const numberRoutes = require("./routes/numberRoutes");

//middleware
app.use(cors());
app.use(express.json());

app.use("/numbers",numberRoutes);

app.listen(5000, () => {
  console.log("Server is listening on 5000");
});
