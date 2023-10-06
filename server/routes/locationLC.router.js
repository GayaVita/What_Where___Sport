const express = require('express');
const bcrypt = require('bcrypt');
const { Location } = require('../db/models');

const router = express.Router();

router.post('/userLC/location_form', async (req, res) => {
  try {
  // location_title: string;
  const {location_district} = req.body.location_district;
  const {location_address} = req.body.location_address;
  // location_price: number | '';
  const {location_photo} = req.body.location_photo;
  const {location_category} = req.body.location_category;
  // location_contact: string;
  // const {coordinateX} = req.body.coordinateX;
  // const {coordinateY} = req.body.coordinateY;
  const {profile_id_loc} = req.session.user.profile_id
 
    const location = await Location.create({location_district, location_address, location_photo, location_category, profile_id_loc
    })

  } catch (error) {
    console.log(error)
  }
  res.json(location)
})