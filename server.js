require("dotenv").config();

const express = require("express");
const cookieParser =
require("cookie-parser");
const cors = require("cors");

const authRoutes =
require("./routes/authRoutes");

const aiRoutes =
require("./routes/aiRoutes");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use("/api/auth",authRoutes);

app.use("/api/ai",aiRoutes);

app.use((err,req,res,next)=>{

res.status(500).json({
message:"Server Error"
});

});

app.listen(
process.env.PORT,
()=>{
console.log(
`Server Running`
);
}
);