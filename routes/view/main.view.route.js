const router = require('express').Router();
const Main = require('../../components/Main');

router.get('/', async (req, res) => {
  res.renderComponent(Main, { title: 'Main Page' });
});

module.exports = router;
