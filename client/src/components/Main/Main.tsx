import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import styles from '../Homepage/eventCard.Home.module.css';

export default function Main() {
  return (
    <div>
        {/* <img src='../public/tennis.jpg'></img>\ */}
         <div className={styles.eventHome_slider}>
          слайдер со спортивными мероприятиями
         </div>
         
         
    </div>
  )
}
