const router = require('express').Router();

const { Subscriber } = require('../db/models');

// router.get('/', async (req, res) => {
//   try {
//     const mySubscribes = await Subscriber.findAll({ where: { user_id: req.session.user.id}});
//   } catch (error) {
//     console.log(error)
//   }
// })

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Subscriber.create({
      user_id: req.session.user.id,
      activity_id: id,
      status: 'На рассмотрении',
    });
    return res.json(event);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.patch('/:id', async (req, res) => {
  
})

module.exports = router;
