import express from "express";
import routes from "./routes/apiRoutes.js";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", routes);

// Test API call every 5 min
setInterval(() => {
  fetch(`http://localhost:${PORT}/api/test`)
    .then((res) => res.text())
    .then((data) => console.log("Auto test called:", data))
    .catch((err) => console.error("Test API error:", err));
}, 5 * 60 * 1000); // every 5 mins

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
