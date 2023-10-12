const express = require('express');
const multer = require('multer');
const path = require('path');
const { Profile, User } = require('../db/models');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../client/public/photos/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

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
    const { id } = req.session?.user;
    const { user_name, user_about, user_age, user_tg, user_mobile } = req.body;
    if (!user_name || !user_about || !user_age || !user_tg || !user_mobile) {
      return res.status(400).json({ message: 'Не все поля заполнены!' });
    }
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

router.patch('/profile_form/:id', upload.any(), async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.files[0];
    await Profile.update({ user_photo: filename }, { where: { id } });
    const foundUser = await User.findOne({
      where: { id: req.session?.user?.id },
      include: Profile,
    });
    const user = JSON.parse(JSON.stringify(foundUser));
    delete user.password;
    req.session.user = {
      id: user.id,
      login: user.login,
      email: user.email,
    };
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
