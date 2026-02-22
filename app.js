const express = require("express");
const app = express();

const PORT = process.env.port || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port : ${PORT}`);
});
