const Mentor = require('../models/Mentor');
const bcrypt = require('bcryptjs');

exports.registerMentor = async (req, res) => {
  const { name, year, registrationNumber, email, role } = req.body;

  try {
    // Check for missing fields
    if (!name || !year || !registrationNumber || !email || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const mentorExists = await Mentor.findOne({ email });
    if (mentorExists) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash('vnrvjiet', 10);

    const mentor = new Mentor({
      name,
      year,
      registrationNumber,
      email,
      role,
      password: hashedPassword,
    });

    await mentor.save();
    res.status(201).json({ message: 'Mentor registered successfully' });
  } catch (error) {
    console.error('Error registering mentor:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error registering mentor', error: error.message });
  }
};
