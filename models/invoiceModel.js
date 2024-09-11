// models/Invoice.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  description: { type: String },
  unitPrice: { type: Number },
  quantity: { type: Number },
  discount: { type: Number },
  netAmount: { type: Number },
});

const invoiceSchema = new mongoose.Schema(
  {
    companyLogo: { type: String },
    name: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    panNo: { type: String },
    gstRegistrationNo: { type: String },
    placeOfSupply: { type: String },
    placeOfDelivery: { type: String },
    reverseCharge: { type: String },
    billingName: { type: String },
    billingAddress: { type: String },
    billingCity: { type: String },
    billingState: { type: String },
    billingPincode: { type: String },
    billingStateUtCode: { type: String },
    shippingName: { type: String },
    shippingAddress: { type: String },
    shippingCity: { type: String },
    shippingState: { type: String },
    shippingPincode: { type: String },
    shippingStateUtCode: { type: String },
    orderNo: { type: String },
    orderDate: { type: Date },
    invoiceNo: { type: String },
    invoiceDetails: { type: String },
    invoiceDate: { type: Date },
    items: [itemSchema],
    taxRate: { type: Number },
    taxRAmount: { type: Number },
    totalAmount: { type: Number },
    signature: { type: String }, // URL or path to the file
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.model("Invoice", invoiceSchema);
