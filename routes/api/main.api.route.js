const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { user } = req.body;
    if (user) {
      const data = await User.create({ user, score: 0 });
      res.app.locals.user = data;
      res.status(201).json({ message: 'ok', data });
    } else {
      res.status(400).json({ message: 'Нет user и score' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
