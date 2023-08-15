const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

const postContact = asyncHandler(async (req, res) => {
  console.log("Request body: " + req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ message: "Create contacts" });
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get contact for " + req.params.id });
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update contact for " + req.params.id });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete contact for " + req.params.id });
});

module.exports = {
  getContacts,
  postContact,
  getContact,
  updateContact,
  deleteContact,
};
