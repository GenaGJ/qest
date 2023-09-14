const router = require('express').Router();
const Questions = require('../../components/Question');
const { Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  const theme = await Theme.findAll();
  res.renderComponent(Questions, { title: 'Questions Page', theme });
});

module.exports = router;
