require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3002;
const locationRouter = require('./routes/locations.route');

app.use(cors({ origin: true }));
app.use(logger('dev'));
app.use(cors({ credentials: true, origin: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/locations', locationRouter);

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
});