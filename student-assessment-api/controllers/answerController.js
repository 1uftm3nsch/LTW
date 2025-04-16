const fs = require('fs');
const path = require('path');

const saveAnswers = (req, res) => {
  const { studentId, answers } = req.body; // answers: [{ questionId, answer }]
  const filePath = path.join(__dirname, '../models/answers.json');

  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  existing.push({ studentId, answers });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.json({ message: 'Answers saved', studentId });
};

module.exports = { saveAnswers };
