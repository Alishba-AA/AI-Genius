const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const users = require("../db/users");

const router = express.Router();

let refreshTokens = [];

router.post("/login",(req,res)=>{

const {email,password} = req.body;

const user = users.find(
u=>u.email===email
);

if(
!user ||
!bcrypt.compareSync(password,user.password)
){
return res.status(401).json({
message:"Invalid Credentials"
});
}

const payload = {
id:user.id,
email:user.email,
role:user.role
};

const accessToken = jwt.sign(
payload,
process.env.JWT_SECRET,
{expiresIn:"15m"}
);

const refreshToken = jwt.sign(
payload,
process.env.JWT_SECRET,
{expiresIn:"7d"}
);

refreshTokens.push(refreshToken);

res.cookie(
"refreshToken",
refreshToken,
{
httpOnly:true,
sameSite:"strict",
secure:false
}
);

res.json({
accessToken
});

});
router.post("/refresh",(req,res)=>{

const refreshToken =
req.cookies.refreshToken;

if(!refreshToken){

return res.status(401).json({
message:"No Refresh Token"
});

}

if(!refreshTokens.includes(refreshToken)){

return res.status(403).json({
message:"Refresh Token Invalid"
});

}

try{

const decoded =
jwt.verify(
refreshToken,
process.env.JWT_SECRET
);

const accessToken =
jwt.sign(
{
id:decoded.id,
email:decoded.email,
role:decoded.role
},
process.env.JWT_SECRET,
{expiresIn:"15m"}
);

res.json({accessToken});

}catch(error){

res.status(403).json({
message:"Refresh Failed"
});

}

});

module.exports = router;