import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './eventCard.module.css';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { getAllEvents } from '../../../../../store/eventSlice/asyncThunk';

// export type EventCardTypeLC = {
//   location_title: string;
//   location_address: string;
//   location_district: string;
//   // location_price: number | '';
//   location_photo: string;
//   location_category: string;
//   // location_contact: string;
//   user_id_loc: number | '';
//   // coordinateX: string;
//   // coordinateY: string;
// };

export default function EventCardLC(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { events } = useAppSelector((store) => store.events);
  console.log('events', events);
  // const [formData, setFormData] = useState<EventCardType>({
  //   location_title: '',
  //   location_address: '',
  //   location_district: '',
  //   // location_price: '',
  //   location_photo: '',
  //   location_category: '',
  //   // location_contact: '',
  //   user_id_loc: '',
  //   // coordinateX: '',
  //   // coordinateY: '',
  // });

  React.useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  // const clickContactHandler = (): void => {
  //   navigate('/userLC/location_form/entry_form');
  // };
  const clickRejectHandler = (): void => {
    navigate('/userLC/location_form/entry_form');
  };
  const clickDeleteHandler = (): void => {
    navigate('/userLC/location_form/activity_form');
  };

  return (
    <div className={styles.event_container}>
      {events &&
        events.map((event) => (
          <div className={styles.event_form__wrapper} key={event.id}>
            <div className={styles.event_form__card}>
              <Button
                variant="secondary"
                type="button"
                className={styles.profile_form_delete__button}
                onClick={clickDeleteHandler}
              >
                Отменить!
              </Button>

              <div className={styles.event_form__table}>
                <div className={styles.event_form__tableMain}>
                  <p className={styles.event_title}>{event.Location.location_title}</p>
                  <p className={styles.event_city}>{event.Location.location_district}</p>
                  <p className={styles.event_address}>{event.Location.location_address}</p>
                  {/* <p className={styles.event_type}>activity_type</p> */}
                </div>

                <div className={styles.event_form__tableDate}>
                  <p className={styles.event_date}>{event.activity_date}</p>
                  <p className={styles.event_time}>{event.activity_time}</p>
                </div>
              </div>

              <div className={styles.all_event_users}>
                {event.Subscribers.length > 0 &&
                  event.Subscribers.map((subscriber) => (
                    <div className={styles.event_user_container}  key={subscriber.id}>
                      <p className={styles.event_user}>{subscriber?.User?.login}</p>

                      <Button
                        variant="secondary"
                        type="button"
                        className={styles.profile_form_contact__button}
                      >
                        <a href={subscriber?.User?.Profile?.user_tg} target='_blank'>Связаться</a>
                        
                      </Button>

                      <Button
                        variant="secondary"
                        type="button"
                        className={styles.profile_form_reject__button}
                        onClick={clickRejectHandler}
                      >
                        Отклонить
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
