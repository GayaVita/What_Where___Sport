import React, { useState, useEffect } from 'react';
import styles from './Locations.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getFilteredLocations, getLocations } from '../../store/locationsSlices/thunkActions';
import { Button, Form, Card, ListGroup } from 'react-bootstrap';
import { ILocation } from '../types';
import { setSortedLocationsASC, setSortedLocationsDESC } from '../../store/locationsSlices/locationsSlice';
import { Link } from 'react-router-dom';


export default function Locations(): JSX.Element {
  const [filter, setFilter] = useState({
    location_district: '',
    location_category: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const { locations, filteredLocations } = useAppSelector((store) => store.locations);

  const dispatch = useAppDispatch();

 useEffect(() => {
   dispatch(getLocations())
   dispatch(getFilteredLocations(filter))
 }, [dispatch]);

 const handleSetFilter = (key: string, value: string) => {
  setFilter({...filter, [key]: value})
 }
 
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target) {
      handleSetFilter(e.target.name, e.target.value);
    }
  };

  const filteringLocations = () => {
    dispatch(getFilteredLocations(filter));
    setIsVisible(false);
  }

  const resetFilteringLocations = () => {
    setFilter({
      location_district: '',
      location_category: '',
    })
    dispatch(getFilteredLocations({
      location_district: '',
      location_category: '',
    }))
    setIsVisible(false);
  }

  const sortByPriceASC = () => {
    dispatch(setSortedLocationsASC(filteredLocations));
  }

  const sortByPriceDESC = () => {
    dispatch(setSortedLocationsDESC(filteredLocations));
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const uniqueCategories = [...new Set(locations.map((location) => location.location_category))];

  const uniqueDistricts = [...new Set(locations.filter((el) => el.location_category === filter.location_category).map((location) => location.location_district))];
  
  return (
    <>
    {/* <h1 className={styles.location_large_title}>Площадки для занятий спортом</h1> */}

    <div className={styles.filter}>
     <Button className={styles.btnFilter} variant="success" onClick={() => {toggleVisibility(); handleFilter('')}}>
        Фильтр
      </Button>
    {isVisible && (
      <div className={styles.isVisibleBtn}>
        <Form.Select className={styles.selectCategory} name='location_category' onChange={handleFilter}>
          <option>Категория</option>
          {uniqueCategories && 
            uniqueCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
          ))}
        </Form.Select>
        <Form.Select className={styles.selectDistrict} name='location_district' onChange={handleFilter}>
          <option>Округ</option>
            {uniqueDistricts && 
            uniqueDistricts.map((district) => (
              <option key={district} value={district}>{district}</option>
          ))}
        </Form.Select>
        <div className={styles.btnsFilter}>
          <Button className={styles.btnReset} variant="success" onClick={resetFilteringLocations} >
            Cбросить
          </Button>
          <Button className={styles.btnFind} variant="success" onClick={filteringLocations} >
            Найти
          </Button>
        </div>
      </div>
      )}

      <div className={styles.btnSort}>Сортировать по цене</div>    
        <svg className={styles.sortUp} xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" onClick={sortByPriceASC} ><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>    
        <svg className={styles.sortDown} xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" onClick={sortByPriceDESC}><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" /></svg>         
      </div>
      <div className={styles.locations_container}>
      {filteredLocations && 
          filteredLocations.map((location: ILocation) => (
            <Card className={styles.location_card} key={location.id} >
              <Link className={styles.location_link} to={`/locations/${location.id}`}> 
               <div className={styles.location_picture}>
                  <div className={styles.scale1}>
                    <Card.Img variant="top" src={location.location_photo} className={styles.location_photo}/>
                  </div>
                <div className={styles.location_price}>{location.location_price} ₽/час</div>
              </div>
            
              <Card.Body>
                <div className={styles.location_info}>
                  <Card.Title className={styles.location_title}>{location.location_title}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className={styles.location_category}>Категория: {location.location_category}</ListGroup.Item>
                    <div className={styles.address_container}>
                      <div className={styles.location_district}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
                        fill="#496937"/></svg>
                        {' '}{location.location_district}
                      </div>
                      <div className={styles.location_address}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                        fill="#496937"/></svg>
                        {' '}{location.location_address}
                      </div>
                      <div className={styles.location_address}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                        fill="#496937"/></svg>
                        {' '}{location.location_contact}
                      </div>
                    </div>
                  </ListGroup>
                </div>
              </Card.Body>
              </Link>
            </Card> 
           ))
          }
      </div>
      </>
    )
  }

       {/* <h2 className={styles.location_large_title}>Площадки для занятий спортом</h2>

         <div className={styles.filter}>
           <Button className={styles.btnFilter} variant="success" onClick={() => {toggleVisibility(); handleFilter('')}}>
             Фильтр
           </Button>
           {isVisible && (
            <div className={styles.isVisibleBtn}>
              <Form.Select className={styles.selectCategory} name='location_category' onChange={handleFilter}>
                <option>Категория</option>
                {uniqueCategories && 
                  uniqueCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
              </Form.Select>
              <Form.Select className={styles.selectDistrict} name='location_district' onChange={handleFilter}>
                <option>Округ</option>
                  {uniqueDistricts && 
                  uniqueDistricts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                ))}
              </Form.Select>
              <div className={styles.btnsFilter}>
                <Button className={styles.btnReset} variant="success" onClick={resetFilteringLocations} >
                  Cбросить
                </Button>
                <Button className={styles.btnFind} variant="success" onClick={filteringLocations} >
                  Найти
                </Button>
              </div>
            </div>
            )}
            <div className={styles.btnSort}>Сортировать по цене</div>    
              <svg className={styles.sortUp} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" onClick={sortByPriceASC} ><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>    
              <svg className={styles.sortDown} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" onClick={sortByPriceDESC}><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" /></svg>         
            </div>

      <div className={styles.locationList}>
          {filteredLocations && 
          filteredLocations.map((location: ILocation) => (
            <div key={location.id} className={styles.location}>
              <div className={styles.location_picture}>
                <img className={styles.location_photo} src={location.location_photo} alt="place" />
                <div className={styles.location_price}>{location.location_price} руб./час</div>
              </div>
              
              <div className={styles.location_info}>
                <h5 className={styles.location_title}>{location.location_title}</h5>
                  <ul className={styles.location_ul}>
                    <li className={styles.location_category}>Категория: {location.location_category}</li>
                    <li className={styles.location_district}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
                    fill="#496937"/></svg> 
                    {' '}{location.location_district}
                    </li>
                    <li className={styles.location_address}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
                    fill="#496937"/></svg> 
                    {' '}{location.location_address}
                    </li>
                    <li className={styles.location_contact}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                      <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                      fill="#496937"/>
                     </svg>
                      {' '}{location.location_contact}
                      </li>
                  </ul>
                  <div className={styles.btnBookLocationDiv}>
                    <Link to={`/locations/${location.id}`}>
                      <Button className={styles.btnBookLocation}variant="success">
                        Подробнее
                      </Button>
                    </Link>
                  </div>
              </div>
            </div>
          )) 
          }
      </div>
    </> */}
 