
const router = require('express').Router();
const { Op } = require('sequelize');

const { Activity, User, Location, Profile, Subscriber } = require('../db/models');

router.get('/', async (req, res) => {
  const allActivities = await Activity.findAll({
    where: {
      activity_date: {
        [Op.gte]: new Date(),
      },
    },
    include: [{
      model: User,
      include: Profile,
    }, {
      model: Location,
    }, {
      model: Subscriber,
    }],
  });
  // const allActivities = await Activity.findAll({});
  res.json(allActivities);
});

module.exports = router;