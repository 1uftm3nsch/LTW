const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Đọc danh sách câu hỏi từ file JSON
router.get('/', (req, res) => {
  const questionsFilePath = path.join(__dirname, '../data/questions.json');
  try {
    const data = fs.readFileSync(questionsFilePath, 'utf8');
    const questions = JSON.parse(data);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Không đọc được file câu hỏi' });
  }
});

module.exports = router;
