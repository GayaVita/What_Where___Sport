const express = require('express');
const { Location } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const locations = await Location.findAll({ where: { admin_id: 1 }, raw: true, order: [['createdAt', 'DESC']] });
  res.json(locations);
});


router.get('/search', async (req, res) => {
  try {
    const { location_category, location_district } = req.query;
    const whereClause = {}; // Создаем пустой объект для условий поиска

    // Если есть параметр location_category, добавляем его в условия
    if (location_category) {
      whereClause.location_category = location_category;
    }

    // Если есть параметр location_district, добавляем его в условия
    if (location_district) {
      whereClause.location_district = location_district;
    }

    // Выполняем запрос с учетом условий
    const filteredLocations = await Location.findAll({
      where: { ...whereClause, admin_id: 1 },
      raw: true,
      order: [['createdAt', 'DESC']],
    });

    res.json(filteredLocations);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;