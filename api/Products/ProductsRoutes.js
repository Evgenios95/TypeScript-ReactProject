import express from "express";

import {
  getAllProducts,
  getProduct,
  getCategories,
  getImportante,
  postProduct,
  deleteProductById,
  getFilteredProducts
} from "./ProductsControllers.js";

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/categories").get(getCategories);
router.route("/cat/:category").get(getFilteredProducts);
router.route("/info").get(getImportante);
router.route("/product").post(postProduct);
router.route("/:productId").get(getProduct);
router.route("/:productId").delete(deleteProductById);

export default router;