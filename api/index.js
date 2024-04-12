const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/service.routes');
const newsRoutes = require('./routes/news.routes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();

mongoose
	.connect(process.env.MONGODB_CONNECT_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB connected successfully');
	})
	.catch((err) => {
		console.error('MongoDB connection error:', err);
	});

app.use('/api/services', serviceRoutes);
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
