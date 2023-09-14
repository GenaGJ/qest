const router = require('express').Router();

router.put('/:idCardList', async (req, res) => {
  const { idCardList } = req.params;
  // const { name, type, img, discribe, price } = req.body;

  // if (name && type && img && discribe && price) {
    const data = await Animal.update(
      { name, type, img, discribe, price },
      { where: { id: idCardList } },
    );
    res.status(200).json({ data });
  } else {
    res.status(400).json({ message: 'Заполни все поля' });
  }
});

module.exports = router;
