const express = require("express");
const route = express.Router();
const Package = require("../../models/Package");

// @route   GET api/packages/test
// @desc    Tests packages route
// @access  Public
route.get("/", (req, res) => {
  res.json({ success: "You've visited route package" });
});

// @route   GET api/packages/search/:id
// @desc    Tests packages route for searching tracking id
// @access  Public with unique tracking key
route.get("/search/:trackid", (req, res) => {
  const track = req.params.trackid;
  Package.findOne({ trackingid: track })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ message: "There is no record for this item" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = route;
