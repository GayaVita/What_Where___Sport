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
            include: Profile
          }
        },
      ],
      order: [['activity_date', 'ASC']]
    });
    res.json(mySubscribes)
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
