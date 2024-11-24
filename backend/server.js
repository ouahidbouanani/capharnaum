const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/user.routes');
const activityRoutes = require('./routes/activity.routes');
const favoriteRoutes = require('./routes/favorite.routes');
const proposalRoutes = require('./routes/proposal.routes');

require("dotenv").config({ path: './config/.env' });
require('./config/db');

const bodyParser = require('body-parser');
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/activity', activityRoutes);
app.use('/api/favorite', favoriteRoutes);
app.use('/api/proposal', proposalRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} ...`);
});