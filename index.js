const express = require("express");
const {
  createAgent,
  addPartner,
  getPartners,
  getAllAgents,
} = require("./controllers/agentControllers");
const {
  createPartner,
  createMessage,
  getMessages,
  getAllPartners,
} = require("./controllers/partnersControllers");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/create-agent", createAgent);
app.post("/create-partner", createPartner);
app.post("/:agentId/add-partner", addPartner);
app.post("/:partnerId/create-message", createMessage);
app.get("/:agentId/get-partners", getPartners);
app.get("/:partnerId/get-messages", getMessages);
app.get("/get-agents", getAllAgents);
app.get("/get-partners", getAllPartners);

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/agent-partner", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(3000, () => {
  console.log("server running");
});
