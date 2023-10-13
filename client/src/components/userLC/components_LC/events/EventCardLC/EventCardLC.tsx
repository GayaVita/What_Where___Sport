import React, { useState } from 'react';
import { Form, Button, Card, ListGroup, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './eventCard.module.css';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import {
  deleteEvent,
  getAllEvents,
  rejectSubscribersRequest,
} from '../../../../../store/eventSlice/asyncThunk';
import SubscriberCard from '../SubscriberCard/SubscriberCard';

export default function EventCardLC(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { events, subscribers } = useAppSelector((store) => store.events);
  console.log('events', events);
  console.log('subscribers', subscribers);

  React.useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (

    
    // <Accordion defaultActiveKey="0">
    // <Accordion.Item eventKey={event.id}>
    //   <Accordion.Header>Accordion Item #1</Accordion.Header>
    //   <Accordion.Body>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

    //   </Accordion.Body>
    // </Accordion.Item>
    // </Accordion>




    
    <div className={styles.profile_card__wrapper}>
      {events &&
        events.map((event) => (
          <div className={styles.event_form__wrapper} key={event.id}>
            <div className={styles.event_form__card}>
              <Button
                variant="secondary"
                type="button"
                className={styles.profile_form_delete__button}
                onClick={() => dispatch(deleteEvent(event?.id))}
              >
                Отменить!
              </Button>

              <div className={styles.event_form__table}>
                <div className={styles.event_form__tableMain}>
                  <div className={styles.event_svg__wrapper}>
                    <img
                      src="/public/img/LC/stadium.svg"
                      alt="object"
                      className={styles.event_svg}
                    />
                    <p className={styles.event_title}>{event?.Location?.location_title}</p>
                  </div>

                  <div className={styles.event_svg__wrapper}>
                    <img src="/public/img/LC/map1.svg" alt="street" className={styles.event_svg} />
                    <p className={styles.event_city}>{event?.Location?.location_district}</p>
                  </div>

                  <div className={styles.event_svg__wrapper}>
                    <img src="/public/img/LC/map2.svg" alt="street" className={styles.event_svg} />
                    <p className={styles.event_address}>{event?.Location?.location_address}</p>
                  </div>
                </div>

                <div className={styles.event_form__tableDate}>
                  <div className={styles.event_svg__wrapper}>
                    <img
                      src="/public/img/LC/calendar.svg"
                      alt="date"
                      className={styles.event_svg}
                    />
                    <p className={styles.event_date}>{event?.activity_date?.slice(0, 10)}</p>
                  </div>
                  <div className={styles.event_svg__wrapper}>
                    <img src="/public/img/LC/time.svg" alt="time" className={styles.event_svg} />
                    <p className={styles.event_time}>{event.activity_time}</p>
                  </div>
                  <div className={styles.event_svg__wrapper}>
                    <img
                      src="/public/img/LC/calendar.svg"
                      alt="date"
                      className={styles.event_svg}
                    />
                    <p className={styles.event_time}>{event.activity_type}</p>
                  </div>
                </div>
              </div>

              <div className={styles.all_event_users}>
                {event?.Subscribers?.length > 0 &&
                  event?.Subscribers?.map((subscriber) => (
                    <SubscriberCard key={subscriber.id} subscriber={subscriber} />
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
