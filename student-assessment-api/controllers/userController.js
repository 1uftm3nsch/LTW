const fs = require('fs');
const path = require('path');

const saveUser = (req, res) => {
  const user = req.body;
  const filePath = path.join(__dirname, '../models/users.json');

  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  existing.push(user);

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.json({ message: 'User info saved', user });
};

module.exports = { saveUser };
