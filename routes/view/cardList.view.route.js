const router = require('express').Router();
const CardsList = require('../../components/CardsList');
const { Theme } = require('../../db/models');

router.get('/:idCardList', async (req, res) => {
  const { idCardList } = req.params;
  const questions = await Theme.findOne({ where: { id: idCardList } });
  res.renderComponent(CardsList, { title: 'Card List', questions });
});

module.exports = router;
