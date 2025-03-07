const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  trackingid: { type: String, required: true, unique: true }, // Unique tracking ID for the cart

  receiver: {
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    address: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      LGA: { type: String, required: true },
      homeaddress: { type: String, required: true },
      postalcode: { type: Number }
    }
  },

  items: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Unique item ID
      name: { type: String, required: true },
      dimensionOrSize: { type: mongoose.Schema.Types.Mixed, required: true },
      priceInNaira: { type: Number, required: true },
      merchantOrVendor: { type: String, required: true },
      status: {
        type: String,
        enum: ["Pending", "In Transit", "Delivered", "Lost"],
        default: "Pending"
      }
    }
  ],

  route: [
    {
      from: { type: String, required: true },
      to: { type: String, required: true },
      bundle: {
        in: { type: mongoose.Schema.Types.ObjectId, ref: "Bundle" }, // Previous bundle
        outTo: { type: mongoose.Schema.Types.ObjectId, ref: "Bundle" }, // Next bundle
        status: {
          type: String,
          enum: ["Awaiting Dispatch", "Dispatched", "Arrived"],
          default: "Awaiting Dispatch"
        }
      },
      timestamp: { type: Date, default: Date.now } // Store history of movements
    }
  ]
});

const Package = mongoose.model("Package", PackageSchema);
module.exports = Package;