import React from 'react';
import { SubscriberType } from '../../../../../store/all_activitiesSlice/types';

import styles from './SubscriberCard.module.css';
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch } from '../../../../../store/hooks';
import { rejectSubscribersRequest } from '../../../../../store/eventSlice/asyncThunk';

interface ISubscriberProps {
  subscriber: SubscriberType;
}

export default function SubscriberCard({ subscriber }: ISubscriberProps) {
  const dispatch = useAppDispatch();

  const clickRejectHandler = (): void => {
    // navigate('/userLC/location_form/entry_form');
    if (subscriber.id) {
      dispatch(rejectSubscribersRequest(subscriber?.id));
    }
  };

  return (
    //   <div className={styles.event_user_container} key={subscriber.id}>

    //   <p className={styles.event_user}>{subscriber?.User?.login}</p>

    //   {subscriber.status === 'Отклонено' ? (
    //     <p>Заявка отклонена</p>
    //   ) : (
    //     <>
    //       <Button
    //         variant="secondary"
    //         type="button"
    //         className={styles.profile_form_contact__button}
    //       >
    //         <a href={subscriber?.User?.Profile?.user_tg} target="_blank">
    //           Связаться
    //         </a>
    //       </Button>

    //       <Button
    //         variant="secondary"
    //         type="button"
    //         className={styles.profile_form_reject__button}
    //         onClick={clickRejectHandler}
    //       >
    //         Отклонить
    //       </Button>
    //     </>
    //   )}
    // </div>
    <div>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={`/public/photos/${subscriber?.User?.Profile?.user_photo}`} />
        <Card.Body>
          <Card.Title className={styles.event_user}>{subscriber?.User?.login}</Card.Title>

          <Card.Text></Card.Text>
          {subscriber.status === 'Отклонено' ? (
            <p>Заявка отклонена</p>
          ) : (
            <>
              <Button
                variant="secondary"
                type="button"
                className={styles.profile_form_contact__button}
              >
                <a href={subscriber?.User?.Profile?.user_tg} target="_blank">
                  Связаться
                </a>
              </Button>

              <Button
                variant="secondary"
                type="button"
                className={styles.profile_form_reject__button}
                onClick={clickRejectHandler}
              >
                Отклонить
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
