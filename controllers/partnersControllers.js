const Message = require("../models/Message");
const Partner = require("../models/Partner");

const createPartner = async (req, res) => {
  const { name } = req.body;
  const newPartner = new Partner({
    name,
  });

  await newPartner.save();
  res.json({ message: "partner saved" });
};

const createMessage = async (req, res) => {
  const partnerId = req.params.partnerId;
  const { messageBody } = req.body;
  console.log(req.body);
  const newMessage = new Message({
    username: partnerId,
    messageBody,
  });

  await newMessage.save();
  res.json({ message: "message created" });
};

const getMessages = async (req, res) => {
  const partnerId = req.params.partnerId;
  const foundMessages = await Message.find({ username: partnerId });
  res.json(foundMessages);
};

const getAllPartners = async (req, res) => {
  const foundPartners = await Partner.find({});
  res.json(foundPartners);
};

module.exports = { createPartner, createMessage, getMessages, getAllPartners };
