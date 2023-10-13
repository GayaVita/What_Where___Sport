import React, { useState } from 'react';
import { Form, Button, Card, ListGroup, Container, Row, Col, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import styles from './locationForm.module.css';
import { useAppDispatch } from '../../../../store/hooks';
import { fetchLocationLC } from '../../../../store/locationLCSlice/asyncThunk';
import Map from '../../../Map/Map';
import { LocationLCFormType } from '../../../../store/locationLCSlice/types';

export default function LocationForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LocationLCFormType>({
    location_address: '',
    location_title: '',
    location_district: '',
    coordinateX: '',
    coordinateY: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clickHandler = async () => {
    const resultLocation = await dispatch(fetchLocationLC(formData));
    if (fetchLocationLC.fulfilled.match(resultLocation)) {
      navigate('/userLC/activity_form/');
    }
  };

  return (
    <>
      <Container >
        <Row>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <h5 style={{ textAlign: 'center' }}>Ваше место для занятия спортом</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Map formData={formData} setFormData={setFormData} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      name="location_district"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Город"
                      value={formData?.location_district}
                      onChange={changeHandler}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      name="location_address"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Адрес места"
                      value={formData?.location_address}
                      onChange={changeHandler}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      type="text"
                      name="location_title"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder='Объект (например: спорткомплекс "Динамо")'
                      value={formData?.location_title}
                      onChange={changeHandler}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={clickHandler}
                      style={{ marginBottom: '10px' }}
                    >
                      Создать локацию
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* <Card className={styles.location_form__wrapper}>
          <Card.Body className={styles.location_form__card_body}>
            <Card.Title className={styles.location_form_title}>Ваше место для занятия спортом</Card.Title>
            <div className={styles.yandex_map}>
              <Map formData={formData} setFormData={setFormData} />
            </div>
            <Form.Control
              type="text"
              name="location_district"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Город"
              value={formData?.location_district}
              onChange={changeHandler}
              className={styles.location_form__input}
              disabled />
              <Form.Control
              type="text"
              name="location_address"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Адрес места"
              value={formData?.location_address}
              onChange={changeHandler}
              className={styles.location_form__input}
              disabled />
              <Form.Control
              type="text"
              name="location_title"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder='Объект (например: спорткомплекс "Динамо")'
              value={formData?.location_title}
              onChange={changeHandler} 
              className={styles.location_form__input}/>
                <Button
                variant="secondary"
                type="button"
                className={styles.profile_form__button}
                onClick={clickHandler}>
                Создать локацию
                </Button>
              </Card.Body>
          </Card> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

// <div className={styles.location_form__wrapper}>
//   <div className={styles.form_location}>ProfileCard.module.css
//     <div className={styles.location_form__inputs}>

//       <h5 className={styles.location_form_title}>Создай локацию для спорта!</h5>
//       <p className={styles.location_form_p}>Выбери место на карте</p>

//     <div className={styles.yandex_map}>
//       <Map formData={formData} setFormData={setFormData} />

//     </div>
//       <input
//         className={styles.location_form__input}
//         name="location_district"
//         type="text"
//         placeholder="город"
//         value={formData?.location_district}
//         onChange={changeHandler}
//         disabled
//       />

//       <input
//         className={styles.location_form__input}
//         name="location_address"
//         type="text"
//         placeholder="адрес места"
//         value={formData?.location_address}
//         onChange={changeHandler}
//         disabled
//       />

//       <input
//         className={styles.location_form__input}
//         name="location_title"
//         type="text"
//         placeholder="обьект (например: спорткомплекс `Динамо`) "
//         value={formData?.location_title}
//         onChange={changeHandler}
//       />
//     {/* </div> */}
//     {/* <div > */}
//       <Button
//         variant="secondary"
//         type="button"
//         className={styles.profile_form__button}
//         onClick={clickHandler}
//       >
//         Создать Локацию!
//       </Button>
//     </div>
//   </div>
// </div>
