const express = require("express");
const bcrypt = require("bcrypt");
const { Activity } = require("../db/models");

const router = express.Router();

router.post('/userLC/activity_form', async(req, res) => {
  try {
    const {activity_type} = req.body.activity.type;
    const {activity_date} = req.body.activity_date;
    const {activity_time} = req.body.activity_time;
    const {activity_message} = req.body.activity_message;

    const activity = Activity.create({activity_type, activity_date, activity_time, activity_message})
    
    // profile_id, location_id  - include!!!!
    
  } catch (error) {
    console.log(error)
  }
   res.json(activity) 
})