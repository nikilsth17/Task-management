import express from "express";
// import customerRoutes from "./customer/customer.route.js";
// import productRoutes from "./product/product.route.js";
import { dbConnect } from "./db_connect.js";
import userRoutes from "./user/user.route.js";
import taskRoutes from "./taskManagement/task.route.js"


const app = express();

app.use(express.json());

dbConnect();

// register routes
// app.use(customerRoutes);
// app.use(productRoutes);
app.use(userRoutes);

app.use(taskRoutes);


// const port=8000;
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("App is listening on port", port);
});
