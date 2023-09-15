const router = require('express').Router();

const mainApiRouter = require('./api/main.api.route');

const cardListViewRouter = require('./view/cardList.view.route');
const mainViewRouter = require('./view/main.view.route');
const questionsViewRouter = require('./view/questions.view.route');

router.use('/', mainViewRouter);
router.use('/questions', questionsViewRouter);
router.use('/cardlist', cardListViewRouter);

router.use('/api', mainApiRouter);

module.exports = router;
