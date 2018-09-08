const ActivityLogController = require('../controllers/logs.ctrl');
const express = require('express');
const router = express.Router();

router.route('/activity-logs/create').post(ActivityLogController.create);
router.route('/activity-logs').get(ActivityLogController.getAllLogs);
router.route('/activity-logs/user/:user_id').get(ActivityLogController.getUserLogs);

module.exports = router;