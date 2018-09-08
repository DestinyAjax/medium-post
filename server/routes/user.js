const userController = require('../controllers/user.ctrl');
const express = require('express');
const router = express.Router();

router.route('/users/authenticate').post(userController.authenticate);
router.route('/users/register').post(userController.register);
router.route('/users/').get(userController.getAll);
router.route('/users/current').get(userController.getCurrent);
router.route('/users/:id').get(userController.getById);
router.route('/users/update/:id').put(userController.update);
router.route('/users/delete/:id').delete(userController.delete);

module.exports = router;
