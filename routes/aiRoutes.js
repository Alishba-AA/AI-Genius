const express = require("express");

const protect =
require("../middleware/protect");

const restrictTo =
require("../middleware/restrictTo");

const router = express.Router();

router.get(
"/free-model",
protect,
(req,res)=>{
res.json({
message:"Free AI Model"
});
}
);

router.post(
"/premium-model",
protect,
restrictTo(
"Premium_User",
"Admin"
),
(req,res)=>{
res.json({
message:"Premium AI Model"
});
}
);

router.delete(
"/purge-cache",
protect,
restrictTo("Admin"),
(req,res)=>{
res.json({
message:"Cache Purged"
});
}
);

module.exports = router;