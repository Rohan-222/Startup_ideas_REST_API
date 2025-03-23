require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

// Routes
const ideasRoutes = require('./routes/ideaRoutes');
app.use('/ideas', ideasRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
