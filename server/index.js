require("dotenv").config();

const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

<<<<<<< HEAD
const accessRouter = require("./routes/access.router");
=======
const accessRouter = require('./routes/access.router');
const profileRouter = require('./routes/profile.router');
>>>>>>> dev

const sessionConfig = {
  name: "SelfGameCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT || 3002;
const locationRouter = require("./routes/locations.route");

app.use(logger("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sessionConfig));

<<<<<<< HEAD
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
app.use("/user", accessRouter);
app.use("/api/locations", locationRouter);
=======
app.use('/user', accessRouter);
app.use('/api/locations', locationRouter);
app.use('/userLC', profileRouter);
>>>>>>> dev

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});

