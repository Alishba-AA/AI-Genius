const bcrypt = require("bcryptjs");

const users = [
{
id: 1,
email: "admin@aigenius.com",
password: bcrypt.hashSync("admin123",10),
role: "Admin"
},
{
id: 2,
email: "premium@aigenius.com",
password: bcrypt.hashSync("premium123",10),
role: "Premium_User"
},
{
id: 3,
email: "free@aigenius.com",
password: bcrypt.hashSync("free123",10),
role: "Free_User"
}
];

module.exports = users;