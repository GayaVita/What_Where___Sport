require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const accessRouter = require('./routes/access.router');
const profileRouter = require('./routes/profile.router');
const locationLCRouter = require('./routes/locationLC.router');
const activityRouter = require('./routes/activity.router');
const indexRouter = require('./routes/index.router');
const all_activitiesRouter = require('./routes/all_activities.router');
const subscriberRouter = require('./routes/subscriber.router');
const eventRouter = require('./routes/event.router');

const sessionConfig = {
  name: 'SelfGameCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT || 3002;
const locationRouter = require('./routes/locations.router');

app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});
app.use('/user', accessRouter);
app.use('/api/locations', locationRouter);
app.use('/', indexRouter);
app.use('/userLC', profileRouter);
app.use('/userLC/location_form', locationLCRouter);
app.use('/userLC/activity_form', activityRouter);
app.use('/userLC/event', eventRouter);
app.use('/all_activities', all_activitiesRouter);
app.use('/subscribers', subscriberRouter);

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
