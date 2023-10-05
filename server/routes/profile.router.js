const express = require('express');
const bcrypt = require('bcrypt');
const { User, Profile } = require('../db/models');

const router = express.Router();

router.post('/userLC/profile_form', async (req, res) => {
  try {
    const { user_name } = req.body.user_name;
    const { user_about } = req.body.user_about;
    const { user_age } = req.body.user_age;
    const { user_tg } = req.body.user_tg;
    const { user_mobile } = req.body.user_mobile;
    const { user_id } = req.session.user.id;

    const profile = await Profile.create({user_name, user_about, user_age, user_tg, user_mobile, user_id})
    
    //добавить
    req.session.user = {
      profile_id: profile.id
    }
  } catch (error) {
    console.log(error);
  }
  res.json(profile);
});
