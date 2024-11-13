const express = require('express');
const cors = require('cors');
const app = express();

const useRoutes = require('./routes/user.routes');
const eventsRoutes = require ('./routes/events.routes');
const activityRoutes = require('./routes/activity.routes');
const proposalRoutes = require('./routes/proposal.routes');
const favoriteRoutes = require('./routes/favorite.routes');

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

app.use('/api/user', useRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/proposals', proposalRoutes);
app.use('/api/favorites', favoriteRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} ...`);
});