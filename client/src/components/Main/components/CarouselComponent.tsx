import React, { useEffect } from 'react';
import styles from './CarouselComponent.module.css';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ILocation } from '../../types';
import { getLocations } from '../../../store/locationsSlices/thunkActions';

interface caruselItem {
  img: string,
  href: string,
}

export default function CarouselComponent() {

  const { locations } = useAppSelector((store) => store.locations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocations())
  }, [dispatch]);
  console.log('locations', locations);

  return (
      <Marquee speed={30} pauseOnHover className={styles.carusel}>
        {locations &&
        locations.map((location: ILocation, idx) => {
          if (idx < 5) {
            return (
              <div key={location.id}>
                <Link to={`/locations/${location.id}`} >
                  <div className={styles.card_carusel}>
                    <img className={styles.card_carusel_photo}src={location.location_photo} alt="" />
                    <div>
                    {location.location_title}
                    </div>
                    <div>
                    {location.location_address}
                    </div>
                  </div>
               </Link>
              </div>
             )
          }
        }
        )}
      </Marquee> 
  )
}

        {/* </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Ищу напарника для игры в большой теннис
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Билеты на «PWL 6. Наследники Олимпа» - Москва, 3 ноября   
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
           Всего лишь 1000 руб. за аренду спортивного зала
           </div>
        </Link>
        <Link to="/locations" >
           <div className={styles.card_carusel}>
            Билеты на матч Локомотив - Динамо 21 октября 
           </div>
        </Link>
      </Marquee> */}