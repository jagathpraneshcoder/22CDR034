const express = require("express");
const router = express.Router();

router.get("/:numberID",async (req, res) => {
  const numberID = req.params.numberID;
  console.log(numberID);
  if (numberID) {
    res.send(200);
  } else {
    res.send(404);
  }
  }
);

module.exports = router;