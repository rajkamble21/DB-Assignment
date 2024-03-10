const mongoose = require('mongoose');

// Schema for Product Category
const productCategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  desc: String,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Schema for Product Inventory
const productInventorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Schema for Discount
const discountSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  desc: String,
  discount_percent: Number,
  active: Boolean,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Schema for Product
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  desc: String,
  SKU: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' }, // Many-to-One relationship with Product Category
  inventory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductInventory', unique: true }, // One-to-One relationship with Product Inventory
  price: Number,
  discount_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }, // Many-to-One relationship with Discount
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Define models based on the schemas
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { ProductCategory, ProductInventory, Discount, Product };
