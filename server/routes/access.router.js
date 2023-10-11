const express = require('express');
const bcrypt = require('bcrypt');
const { User, Profile } = require('../db/models');

const router = express.Router();

router.post('/registration', async (req, res) => {
  try {
    const { login, email, password } = req.body;

    if (!(login || email || password)) {
      return res.status(400).json({ message: "Please provide all fields" });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { login, password: hashpass },
    });
    if (!created) {
      return res.status(401).json({ message: 'User already exists' });
    }
    const newUser = JSON.parse(JSON.stringify(user));
    delete newUser.password;
    req.session.user = {
      id: user.id,
      login: user.login,
      email: user.email,
    };
    return res.json({
      id: newUser.id,
      login: newUser.login,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email || password)) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }
    const foundUser = await User.findOne({
      where: { email },
      include: Profile,
    });
    if (!foundUser) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    if (!(foundUser && (await bcrypt.compare(password, foundUser.password)))) {
      return res.status(401).json({ message: 'Invalid password' });
    }
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

// router.get("/logout", (req, res) => {
// try {
//   req.session.destroy(() => {
//     res.clearCookie("SelfGameCookie").redirect("/");
//   });
// } catch (err) {
//   console.log(err);
// }
// });

router.get('/logout', (req, res) => {
  res.clearCookie('SelfGameCookie');
  req.session.destroy();
  res.sendStatus(200);
});

router.get('/checkAuth', async (req, res) => {
  if (req.session?.user?.id) {
    const foundUser = await User.findOne({
      where: { id: req.session.user.id },
      include: Profile,
    });
    const user = JSON.parse(JSON.stringify(foundUser));
    return res.json(user);
  }
  return res.sendStatus(401);
});

router.patch("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.update(req.body);
  res.json(user);
});
// на добавление профайла
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.session?.user;
    const { user_name, user_about, user_age, user_tg, user_mobile } = req.body;
    if (!user_name || !user_about || !user_age || !user_tg || !user_mobile) {
      return res.status(400).json({ message: 'Не все поля заполнены' });
    }
    await Profile.create({
      user_name,
      user_about,
      user_age,
      user_tg,
      user_mobile,
      user_id: id,
    });
    const foundUser = await User.findOne({ where: { id }, include: Profile });
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

// router.patch("/:id", async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   await user.update(req.body);
//   res.json(user);
// });

router.delete("/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

module.exports = router;
