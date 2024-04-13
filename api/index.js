const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/service.routes');
const newsRoutes = require('./routes/news.routes');
const dbConnect = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

dbConnect();

app.use('/api/services', serviceRoutes);
app.use('/api/news', newsRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
