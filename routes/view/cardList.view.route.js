const router = require('express').Router();
const CardsList = require('../../components/CardsList');
const { Question } = require('../../db/models');

router.get('/:idCardList', async (req, res) => {
  const { idCardList } = req.params;
  const questions = await Question.findAll({ where: { idTheme: idCardList } });
  const questionsArr = questions.map((el) => el.dataValues);
  res.renderComponent(CardsList, { title: 'Card List', questionsArr });
});

module.exports = router;
