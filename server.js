const express = require("express");
const app = express();
const port = process.env.PUBLIC_PORT || 3000;

app.get("/ping", (req, res) => {
  try {
    return res.send("pong");
  } catch (error) {
    console.error("Error handling request:", error);
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}
module.exports = app;
