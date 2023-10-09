const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.findAll({});
  res.json(users);
});

router.post("/registration", async (req, res) => {
  try {
<<<<<<< HEAD
    const { login, email, password } = req.body;
    if (!(login || email || password)) {
      return res.status(400).json({ message: "Please provide all fields" });
=======
    const checkUser = await User.findOne({ where: { email } });
    console.log(checkUser);
    if (!checkUser) {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        login,
        email,
        password: hash,
      });
      //Денис
      req.session.user ={
        id: newUser.id,
        //Денис
      login: newUser.login
      
      } 
        
      console.log(req.session.user);
      req.session.save(() => {
        res.json({
          access: true,
          msg: "User created successful",
          login: req.session.user.login,
          id: newUser.id,
        });
      });
    } else {
      res.json({
        access: false,
        err: "User already created",
        login: req.session.login,
      });
>>>>>>> dev
    }
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { login, password: hashpass },
    });
    if (!created) {
      return res.status(401).json({ message: "User already exists" });
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
router.post("/login", async (req, res) => {
<<<<<<< HEAD
  try {
    const { email, password } = req.body;
    if (!(email || password)) {
      return res.status(400).json({ message: "Please provide all fields" });
=======
  const { email, password } = req.body;
  const checkEmail = await User.findOne({ where: { email } });
  if (!checkEmail) {
    res.json({ access: false, err: "User can not find" });
  } else {
    const checkPass = bcrypt.compare(password, checkEmail.password);
    if (checkPass) {

      // Денис
      req.session.user ={
        id: checkEmail.id,
        login: checkEmail.login
        } 


      req.session.save(() => {
        res.json({
          access: true,
          msg: "Password correct",
          login: req.session.user.login,
          id: checkEmail.id,
        });
      });
    } else {
      res.json({ access: false, err: "Wrong password" });
>>>>>>> dev
    }
    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) {
      return res.status(401).json({ message: "User does not exist" });
    }
    if (!(foundUser && (await bcrypt.compare(password, foundUser.password)))) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const user = JSON.parse(JSON.stringify(foundUser));
    delete user.password;
    req.session.user = {
      id: user.id,
      login: user.login,
      email: user.email,
    };
    return res.json({
      id: user.id,
      login: user.login,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie("SelfGameCookie").redirect("/");
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/checkAuth", async (req, res) => {
  if (req.session?.user?.id) {
    return res.json({
      id: req.session.user.id,
      login: req.session.user.login,
      email: req.session.user.email,
    });
  }
  return res.sendStatus(401);
});

router.patch("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.update(req.body);
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

module.exports = router;



