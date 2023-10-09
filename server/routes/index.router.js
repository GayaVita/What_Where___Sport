const express = require('express');
const { Op } = require('sequelize');
const { Location } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const locations = await Location.findAll({
    where: {
      admin_id: {
        [Op.eq]: null,
      },
    },
  });
  res.json(locations);
});

module.exports = router;
