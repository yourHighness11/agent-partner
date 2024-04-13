const Agent = require("../models/Agent");

const createAgent = async (req, res) => {
  const { name } = req.body;
  const newAgent = new Agent({
    name,
  });

  await newAgent.save();

  res.json({ message: "agent created" });
};

const addPartner = async (req, res) => {
  const { partners } = req.body;
  const agentId = req.params.agentId;
  // console.log(partners);
  await Agent.findByIdAndUpdate(
    agentId,
    { $push: { partners: partners } },
    { new: true }
  );
  res.json({ message: "partner(s) added" });
};

const getAllAgents = async (req, res) => {
  const foundAgents = await Agent.find({});
  res.json(foundAgents);
};

const getPartners = async (req, res) => {
  const agentId = req.params.agentId;
  const foundPartners = await Agent.findById(agentId).populate("partners");
  res.json(foundPartners.partners);
};

module.exports = { createAgent, addPartner, getPartners, getAllAgents };
