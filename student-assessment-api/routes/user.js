const express = require('express');
const router = express.Router();

router.post('/info', (req, res) => {
  const { hoTen, maSV, nganh, lop, email } = req.body;

  if (!hoTen || !maSV || !nganh || !lop || !email) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
  }

  // Giả lập lưu thông tin
  const userData = { hoTen, maSV, nganh, lop, email };

  console.log("📌 Thông tin sinh viên:", userData);

  res.json({
    message: 'Thông tin đã được ghi nhận.',
    data: userData,
    next: '/api/questions'
  });
});

module.exports = router;
