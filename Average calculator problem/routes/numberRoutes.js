const express = require("express");
const router = express.Router();
const axios = require("axios");
const calculateAverage = require("../controllers/calculators");

const api_map = {
  'p':'http://20.244.56.144/evaluation-service/primes',
  'f':'http://20.244.56.144/evaluation-service/fibo',
  'e':'http://20.244.56.144/evaluation-service/even',
  'r':'http://20.244.56.144/evaluation-service/rand'
}

router.get("/:numberID",async (req, res) => {
  const numberID = req.params.numberID;
  
  if(!api_map[numberID]){
    return res.status(404).json({ message: "Correct ID required" });
  }

  try{
    const result = await axios.get(api_map[numberID],{
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDMzMjM1LCJpYXQiOjE3NDcwMzI5MzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc2ZWM1NmI4LTUwNmEtNGU2Mi1iYjUzLTIyYjhjYzE4NmZkMSIsInN1YiI6ImphZ2F0aHByYW5lc2guMjJjc2RAa29uZ3UuZWR1In0sImVtYWlsIjoiamFnYXRocHJhbmVzaC4yMmNzZEBrb25ndS5lZHUiLCJuYW1lIjoiamFnYXRocHJhbmVzaCByIiwicm9sbE5vIjoiMjJjZHIwMzUiLCJhY2Nlc3NDb2RlIjoiam1wWmFGIiwiY2xpZW50SUQiOiI3NmVjNTZiOC01MDZhLTRlNjItYmI1My0yMmI4Y2MxODZmZDEiLCJjbGllbnRTZWNyZXQiOiJLTnZVZHFwS3hXWWZnemhjIn0.zAzsjMZHhSNMMPD1hBGPPcMHE1g8nSxrYm67CVMXfPk"
      }
  });
  
  console.log(result.data.numbers);
    res.status(200).json(calculateAverage(result.data.numbers));  
  }catch(error){
    console.error(error.message);
    if (error.response && error.response.status === 401) {
      return res.status(503).json({ message: "Unauthorized: Invalid access token" });
    }
     res.status(500).json({ message: "Internal Server Error" });
  }
  
}
);

module.exports = router;