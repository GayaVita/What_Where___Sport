const express = require('express');
const { Activity, Location } = require('../db/models');

const router = express.Router();

// получение всех локаций одного юзера
router.get('/', async (req, res) => {
  try {
    console.log(req.session.user);
    const allUsersLocations = await Location.findAll({
      where: { user_id_loc: req?.session?.user?.id },
    });
    res.json(allUsersLocations);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      activity_type,
      activity_date,
      activity_time,
      activity_message,
      location_id,
    } = req.body;
    const { id } = req.session.user;

    const activity = Activity.create({
      user_id: id,
      activity_type,
      activity_date,
      activity_time,
      activity_message,
      location_id,
    });
    return res.json(activity);
    // profile_id, location_id  - include!!!!
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;