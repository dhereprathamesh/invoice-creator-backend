import express from "express";
import {
  createInvoiceController,
  deleteInvoice,
  getAllInvoices,
  getInvoiceById,
  invoiceUpdateController,
} from "../controllers/invoiceController.js";

const router = express.Router();

//create Invoice routes
router.post("/create-invoice", createInvoiceController);

//Get All Invoice routes
router.get("/get-all-invoice", getAllInvoices);

router.get("/getSingleinvoiceById/:id", getInvoiceById);

//Update Invoice routes
router.put("/invoice-update/:id", invoiceUpdateController);

//delete Invoice routes
router.delete("/:id", deleteInvoice);

export default router;
