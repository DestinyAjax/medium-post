const userController = require('../controllers/user.ctrl');

module.exports = (router) => {
    router.route('/users/authenticate').post(userController.authenticate);
    router.route('/users/register').post(userController.register);
    router.route('/users/').get(userController.getAll);
    router.route('/users/current').get(userController.getCurrent);
    router.route('/users/:id').get(userController.getById);
    router.route('/users/update/:id').put(userController.update);
    router.route('/users/delete/:id').delete(userController.delete);
}