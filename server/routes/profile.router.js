const express = require('express');
const { Profile } = require('../db/models');

const router = express.Router();

router.get('/profile_form', async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      where: { id: req.session?.user?.id },
    });
    res.json(userProfile);
  } catch (error) {
    console.log(error);
  }
});

router.post('/profile_form', async (req, res) => {
  try {
    const { id } = req.session.user;
    const { user_name, user_about, user_age, user_tg, user_mobile } =
      req.body.formData;
    // console.log('req.body', req.body);
    const profile = await Profile.create({
      user_name,
      user_about,
      user_age,
      user_tg,
      user_mobile,
      user_id: id,
    }); //   заменить  user_id после починки регистрации

    // добавить
    // req.session.user = {
    //   profile_id: profile.id
    // }
    // req.session.user.profile_id = profile.id
    res.json(profile);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
