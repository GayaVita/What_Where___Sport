const express = require('express');
const {
  Activity,
  Location,
  Profile,
  Subscriber,
  User,
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const mySubscribes = await Activity.findAll({
      where: {
        user_id: req.session.user.id,
      },
      include: [
        {
          model: Location,
        },
        {
          model: User,
          include: Profile,
        },
        {
          model: Subscriber,
          include: {
            model: User,
            include: Profile,
          },
        },
      ],
      order: [['activity_date', 'ASC']],
    });
    res.json(mySubscribes);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Subscriber.destroy({ where: { activity_id: id } });
    await Activity.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
  const { user_id } = req.body;
  const rejectedRequest = await Subscriber.update(
    { status: 'Отклонено' },
    { where: { 
      activity_id: { id },
      user_id 
    } },
  );
  res.json(rejectedRequest)
  } catch (error) {
    console.log(error)
  }
  
});

module.exports = router;
