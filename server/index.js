import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/register.js";
import TestRoute from "./routes/testRoute.js";
import blogRoute from "./routes/blogRoute.js";
import commentRoute from "./routes/commentRoute.js";
import contactRoute from "./routes/contactRoute.js";
import courseRoute from "./routes/courseRoute.js";
import departmentRoute from "./routes/departmentRoute.js";
import eventRoute from "./routes/eventsRoute.js";
import portfolioRoute from "./routes/portfolioRoute.js";
import teacherRoute from "./routes/teacherRoute.js";
import usersRoute from "./routes/usersRoute.js";
import voucherRoute from "./routes/vocherRoute.js";
import gardianRoute from "./routes/gardiansRoute.js";
import personalInformatoinRoute from "./routes/pInformationRoute.js";
import additionalInformationRoute from "./routes/additionalInfoRoute.js";
import qualificationRoute from "./routes/qualificationRoute.js";
import programSelectionRoute from "./routes/programRoute.js";
import masterApplicationRoute from "./routes/masterApplicationRoute.js";
import chatbotRoutes from "./routes/chatBot.js";
import suggestRoutes from "./routes/suggestRoute.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/chatbot", suggestRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Test route
app.use("/testroute", TestRoute);
app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);
app.use("/contact", contactRoute);
app.use("/courses", courseRoute);
app.use("/departments", departmentRoute);
app.use("/events", eventRoute);
app.use("/portfolio", portfolioRoute);
app.use("/faculty", teacherRoute);
app.use("/users", usersRoute);
app.use("/vochers", voucherRoute);
app.use("/pinfo", personalInformatoinRoute);
app.use("/gardian", gardianRoute);
app.use("/additionalInfo", additionalInformationRoute);
app.use("/qualificatoin", qualificationRoute);
app.use("/programselection", programSelectionRoute);
app.use("/masterapplication", masterApplicationRoute);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
