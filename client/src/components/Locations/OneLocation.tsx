import { useNavigate, useParams } from 'react-router-dom'
import { ILocation } from '../types';
import styles from './OneLocation.module.css'
import { Button, Card, ListGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

export function OneLocation(): JSX.Element {
  const [location, setLocation] = useState<ILocation>();
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    const response = fetch(`http://localhost:3000/api/locations/${id}`);
    response.then((res) => res.json()).then((data) => setLocation(data));
  }, []);

  return (
    <>
     <div className={styles.total_container}>
        <div className={styles.oneLocation_total_container}>
          <div className={styles.oneLocation_tite_container}>
            <svg onClick={() => navigate(-1)} xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
            className={styles.back_arrow}/></svg>
            <Card.Title  className={styles.oneLocation_title}>{location?.location_title}</Card.Title>
          </div>
          <div className={styles.oneLocation_container}>
            <Card className={styles.oneLocation_container_card}>
              <Card.Img variant="top" src={location?.location_photo} />
              <Card.Body className={styles.oneLocation_container_card}>
                <Card.Text className={styles.location_description} >
                {location?.location_description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className={styles.oneLocation_category_listItem}>
                <div className={styles.address_container}>
                  <div className={styles.oneLocation_category}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M162-520h114q-6-38-23-71t-43-59q-18 29-30.5 61.5T162-520Zm522 0h114q-5-36-17.5-68.5T750-650q-26 26-43 59t-23 71ZM210-310q26-26 43-59t23-71H162q5 36 17.5 68.5T210-310Zm540 0q18-29 30.5-61.5T798-440H684q6 38 23 71t43 59ZM358-520h82v-278q-53 8-98.5 29.5T260-712q39 38 64.5 86.5T358-520Zm162 0h82q8-57 33.5-105.5T700-712q-36-35-81.5-56.5T520-798v278Zm-80 358v-278h-82q-8 57-33.5 105.5T260-248q36 35 81.5 56.5T440-162Zm80 0q53-8 98.5-29.5T700-248q-39-38-64.5-86.5T602-440h-82v278Zm-40-318Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z
                    "fill="rgb(54, 139, 123)"/></svg>
                    {' '}{location?.location_category}
                  </div>
                  <div className={styles.oneLocation_district}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
                    fill="rgb(54, 139, 123)"/></svg>
                    {' '}{location?.location_district}
                  </div>
                  <div className={styles.oneLocation_address}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                    fill="rgb(54, 139, 123)"/></svg>
                    {' '}{location?.location_address}
                  </div>
                  <div className={styles.oneLocation_address}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                    fill="rgb(54, 139, 123)"/></svg>
                    {' '}{location?.location_contact}
                  </div>
                </div>
                </ListGroup.Item>
                
              </ListGroup>
              <Card.Body className={styles.btn_container}>
                 <a href='https://t.me/+xdQ_Bp9MU6hkMDY6' target='_blank'>
                <Button className={styles.btnBookOneLocation} variant="success">Связаться</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
     </div>
      
    </>
  )
}
