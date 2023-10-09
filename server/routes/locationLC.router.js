const express = require('express');
const { Location } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      location_title,
      location_district,
      location_address,
      coordinateX,
      coordinateY,
    } = req.body;
    const { id } = req.session?.user;
    if (
      !location_title ||
      !location_district ||
      !location_address ||
      !coordinateX ||
      !coordinateY
    ) {
      return res.status(400).json({ message: 'Не все поля заполнены' });
    }

    const location = await Location.create({
      location_title,
      location_district,
      location_address,
      user_id_loc: id,
      coordinateX,
      coordinateY,
    });
    return res.json(location);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;