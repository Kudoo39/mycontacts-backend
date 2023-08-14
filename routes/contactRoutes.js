const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Get all contacts" });
});

router.route("/").post((req, res) => {
  res.json({ message: "Create Contact" });
});

router.route("/:id").get((req, res) => {
  res.json({ message: "Get contact for " + req.params.id });
});

router.route("/:id").put((req, res) => {
  res.json({ message: "Update contact for " + req.params.id });
});

router.route("/:id").delete((req, res) => {
  res.json({ message: "Delete contact for " + req.params.id });
});

module.exports = router;
