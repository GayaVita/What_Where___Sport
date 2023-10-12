import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './All_activities.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addSubscriber, getAllActivities } from '../../store/all_activitiesSlice/asyncThunk';
import { getAllLocations } from '../../store/locationLCSlice/asyncThunk';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// export type All_ActivitiesType = {
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

export default function All_activities(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);
  const [isApproved, setIsApproved] = useState(false);
  // const [formData, setFormData] = useState<EventCardType>({
  //   location_title: '',
  //   location_district: '',
  //   location_address: '',
  //   // location_price: '',
  //   location_photo: '',
  //   location_category: '',
  //   // location_contact: '',
  //   user_id_loc: '',
  //   // coordinateX: '',
  //   // coordinateY: '',
  // });
  const { activities } = useAppSelector((store) => store.all_activities);
  const allActivities = activities.filter((activity) => activity.user_id !== user?.id);
  console.log('allActivities', allActivities);

  const allApprovedActivities = allActivities?.filter(
    (activity) =>
      activity.Subscribers.length > 0 &&
      activity.Subscribers.find((subscriber) => subscriber.user_id === user?.id),
  );

  const allNewActivities = allActivities?.filter(
    (activity) =>
      activity.Subscribers.length === 0 ||
      activity.Subscribers.find((subscriber) => subscriber.user_id !== user?.id),
  );
  console.log('allNewActivities', allNewActivities);
  console.log('allApprovedActivities', allApprovedActivities);
  
  

  const clickContactHandler = (id: number): void => {
    dispatch(addSubscriber(id));
  };
  useEffect(() => {
    dispatch(getAllActivities());
  }, [isApproved]);

  const [myMap, setMyMap] = React.useState<ymaps.Map | null>(null);
  const { ymaps } = window;
  const { locations } = useAppSelector((store) => store.locationLC);
  console.log('allLocations', locations);

  React.useEffect(() => {
    function init() {
      const map = new ymaps.Map(
        'map',
        {
          center: [55.76, 37.64],
          zoom: 10,
        },
        {
          suppressMapOpenBlock: true,
        },
      );

      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.controls.remove('zoomControl');
      // dispatch(getPlacesThunk());
      const searchControl = new ymaps.control.SearchControl({
        options: {
          provider: 'yandex#search',
        },
      });
      map?.controls.add(searchControl);
      // console.log('searchControl', searchControl);
      setMyMap(map);
      dispatch(getAllLocations());
    }
    ymaps.ready(init);
  }, []);

  React.useEffect(() => {
    locations?.forEach((el) => {
      const coordinates = [el.coordinateX, el.coordinateY];
      const myPlacemarkWithContent = new ymaps.Placemark(
        coordinates,
        {
          balloonContent: `
        <div class="balloon">
          <div class="balloon__title">${el.location_title}</div>
          <button type="button" class="btn sixth" id=${el.id}>Подробнее</button>
      </div>
        `,
        },
        {
          iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/5868/5868069.png', // Своё изображение иконки метки.
          iconImageSize: [40, 40], // Размеры метки.
          iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
          iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
        },
      );
      myMap?.geoObjects.add(myPlacemarkWithContent);
      myMap?.geoObjects.events.add('balloonopen', () => {
        document.getElementById(`${el.id}`)?.addEventListener('click', () => {
          navigate(`/locations/${el.id}`);
          myMap?.balloon.close();
        });
      });
    });
  }, [locations]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={styles.all_activities_form__wrapper}>
              <h1>Новые активности</h1>
              {allNewActivities &&
                allNewActivities.map((card) => (
                  <div className={styles.all_activities_form__card} key={card.id}>
                    <div className={styles.all_activities_form__table}>
                      <div className={styles.all_activities_form__tableMain}>
                        <p className={styles.all_activities_title}>
                          {card?.Location?.location_title}
                        </p>
                        <p className={styles.all_activities_city}>
                          {card?.Location?.location_district}
                        </p>
                        <p className={styles.all_activities_address}>
                          {card?.Location?.location_address}
                        </p>
                      </div>

                      <div className={styles.all_activities_form__tableDate}>
                        <p className={styles.all_activities_date}>
                          {card?.activity_date?.slice(0, 10)}
                        </p>
                        <p className={styles.all_activity_time}>{card.activity_time}</p>
                        <p className={styles.all_activities_type}>{card.activity_type}</p>
                      </div>
                    </div>
                    <div>
                      <p className={styles.all_activities_message}>{card.activity_message}</p>
                      <p className={styles.all_activities_message}>
                        {card.User?.Profile?.user_name}
                      </p>
                    </div>

                    <div className={styles.all_activities_user_container}>
                      <Button
                        variant="secondary"
                        type="button"
                        className={styles.profile_form_contact__button}
                        onClick={() => {
                          clickContactHandler(card?.id);
                          setIsApproved(!isApproved);
                        }}
                      >
                        Отклик
                      </Button>
                    </div>
                  </div>
                ))}
              <h1>Отправленные заявки</h1>
              {allApprovedActivities &&
                allApprovedActivities.map((card) => (
                  <div className={styles.all_activities_form__card} key={card.id}>
                    <div className={styles.all_activities_form__table}>
                      <div className={styles.all_activities_form__tableMain}>
                        <p className={styles.all_activities_title}>
                          {card?.Location?.location_title}
                        </p>
                        <p className={styles.all_activities_city}>
                          {card?.Location?.location_district}
                        </p>
                        <p className={styles.all_activities_address}>
                          {card?.Location?.location_address}
                        </p>
                      </div>

                      <div className={styles.all_activities_form__tableDate}>
                        <p className={styles.all_activities_date}>
                          {card?.activity_date?.slice(0, 10)}
                        </p>
                        <p className={styles.all_activity_time}>{card.activity_time}</p>
                        <p className={styles.all_activities_type}>{card.activity_type}</p>
                      </div>
                    </div>
                    <div>
                      <p className={styles.all_activities_message}>{card.activity_message}</p>
                      <p className={styles.all_activities_message}>
                        {card.User?.Profile?.user_name}
                      </p>
                    </div>
                    <div>
                      {card?.Subscribers?.find((el) => el.user_id === user?.id) && (
                        <p>{card.Subscribers[0].status}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </Col>
          <Col>
            <div className={styles.card_wrapper}>
              <div id="map" className="map" style={{ width: '500px', height: '500px' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
    // <div className={styles.page_wrapper}>
    // </div>
  );
}
