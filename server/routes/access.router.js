const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.findAll({});
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post("/registration", async (req, res) => {
  const { login, email, password } = req.body;
  console.log(req.body);
  try {
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
    }
  } catch (err) {
    console.log("Something wrong", err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
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
    }
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("SelfGameCookie").redirect("/");
  });
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

module.exports = router;



