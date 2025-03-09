const express = require("express");
const route = express.Router();
const Package = require("../../models/Package");

// @route   GET api/packages/test
// @desc    Tests packages route
// @access  Public
route.get("/", (req, res) => {
  res.json({ success: "You've visited route package" });
});
// @route   GET api/packages/search/:trackid
// @desc    Searches for a package by tracking ID
// @access  Public with unique tracking key
route.get("/search/:trackid", (req, res) => {
  const track = req.params.trackid;
  console.log(`Searching for tracking ID: ${track}`);

  Package.findOne({ trackingid: track })
    .then((data) => {
      if (!data) {
        console.log("No record found for:", track);
        return res
          .status(404)
          .json({ message: "There is no record for this item" });
      }

      console.log("Package found:", JSON.stringify(data, null, 2));
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error fetching package:", err);
      res.status(500).json({ message: "Server error", error: err.message });
    });
});

module.exports = route;
