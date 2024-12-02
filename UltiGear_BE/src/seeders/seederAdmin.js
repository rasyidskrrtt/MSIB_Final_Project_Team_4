require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/users");
const Product = require("../models/products");
const Order = require("../models/orders");
const { mongodbUri } = require("../config/env");

const users = [
  {
    name: "admin",
    email: "ultigear@gmail.com",
    password: "password123",
    role: "ADMIN",
    photo_url: "https://example.com/admin.jpg",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: "dzawin",
    email: "dzawinajh@gmail.com",
    password: "password123",
    role: "CUSTOMER",
    photo_url: "https://example.com/dzawin.jpg",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const products = [
  {
    product_name: "Tent for Camping",
    stock_qty: 10,
    price: 150000.0, 
    description: "A durable tent suitable for 4 people.",
    image_url: "https://example.com/tent.jpg",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    product_name: "Sleeping Bag",
    stock_qty: 20,
    price: 50000.0, 
    description: "Comfortable sleeping bag for outdoor use.",
    image_url: "https://example.com/sleepingbag.jpg",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const createOrders = async (userId, productIds) => {
  const orders = [
    {
      product_id: productIds[0],
      user_id: userId,
      total_price: 150000.0, 
      payment_status: "PAID",
      payment_date: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      product_id: productIds[1],
      user_id: userId,
      total_price: 50000.0, 
      payment_status: "PENDING",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  await Order.insertMany(orders);
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(mongodbUri);

    // Hapus data lama
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data lama berhasil dihapus");

    // Masukkan data Users
    const createdUsers = await User.create(users);
    console.log("Users berhasil ditambahkan");

    // Masukkan data Products
    const createdProducts = await Product.create(products);
    console.log("Products berhasil ditambahkan");

    // Masukkan data Orders untuk setiap user yang merupakan CUSTOMER
    for (const user of createdUsers) {
      if (user.role === "CUSTOMER") {
        await createOrders(
          user._id,
          createdProducts.map((product) => product._id)
        );
      }
    }
    console.log("Orders berhasil ditambahkan");

    console.log("Database berhasil di-seed!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
