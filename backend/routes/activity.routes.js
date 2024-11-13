const router = require('express').Router()
const activityController = require('../contollers/activity.controller');

// Routes pour les activités
router.post('/', activityController.createActivity);
router.get('/', activityController.getAllActivities);
router.get('/:id', activityController.getActivityById);
router.put('/:id', activityController.updateActivity);
router.delete('/:id', activityController.deleteActivity);

module.exports = router;
