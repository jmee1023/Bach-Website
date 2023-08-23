// backend/server.js
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Endpoint to handle form submissions
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
        user: 'jmee08233@gmail.com',
        pass: 'c',
      },
    });

    const mailOptions = {
      from: 'jmee08233.com',
      to: 'jmee0823@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
