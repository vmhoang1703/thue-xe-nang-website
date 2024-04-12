const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/service.routes');
const newsRoutes = require('./routes/news.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/LAP');

app.use('/api/services', serviceRoutes);
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
