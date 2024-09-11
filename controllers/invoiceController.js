import invoiceModel from "../models/invoiceModel.js";

// Create a new invoice
export const createInvoiceController = async (req, res) => {
  try {
    const {
      companyLogo,
      name,
      address,
      city,
      state,
      pincode,
      panNo,
      gstRegistrationNo,
      placeOfSupply,
      placeOfDelivery,
      billingName,
      billingAddress,
      billingCity,
      billingState,
      billingPincode,
      billingStateUtCode,
      shippingName,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingPincode,
      shippingStateUtCode,
      orderNo,
      orderDate,
      invoiceNo,
      invoiceDetails,
      invoiceDate,
      reverseCharge,
      items,
      netAmount,
      taxRate,
      taxRAmount,
      totalAmount,
      signature,
    } = req.body;

    const existingInvoice = await invoiceModel.findOne({ invoiceNo });

    if (existingInvoice) {
      return res
        .status(400)
        .json({ message: "Invoice with this number already exists" });
    }

    const newInvoice = new invoiceModel({
      companyLogo,
      name,
      address,
      city,
      state,
      pincode,
      panNo,
      gstRegistrationNo,
      placeOfSupply,
      billingName,
      billingAddress,
      billingCity,
      billingState,
      billingPincode,
      billingStateUtCode,
      shippingName,
      shippingAddress,
      shippingCity,
      shippingState,
      shippingPincode,
      shippingStateUtCode,
      orderNo,
      orderDate,
      invoiceNo,
      invoiceDetails,
      invoiceDate,
      reverseCharge,
      items,
      netAmount,
      taxRate,
      taxRAmount,
      totalAmount,
      signature,
    });

    await newInvoice.save();

    res
      .status(201)
      .json({ message: "Invoice created successfully", data: newInvoice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all invoices
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await invoiceModel.find();
    res.status(200).json({
      success: true,
      count: invoices.length,
      data: invoices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Get a single invoice by ID
export const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await invoiceModel.findById(id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({ data: invoice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing invoice
export const invoiceUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInvoice = await invoiceModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res
      .status(200)
      .json({ message: "Invoice updated successfully", data: updatedInvoice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an invoice
export const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInvoice = await invoiceModel.findByIdAndDelete(id);
    if (!deletedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
