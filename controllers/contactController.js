const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

const postContact = (req, res) => {
  res.status(200).json({ message: "Post all contacts" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: "Get contact for " + req.params.id });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: "Update contact for" + req.params.id });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: "Delete contact for " + req.params.id });
};

module.exports = {
  getContacts,
  postContact,
  getContact,
  updateContact,
  deleteContact,
};
