import React, { useState } from 'react';
import './Locations.css';
import { useAppSelector } from '../../store/hooks';
import { Button, Modal, ListGroup } from 'react-bootstrap';

export default function Locations(): JSX.Element {
//  const [locations, setLocations] = useState({ title: '', photo: '', category: '', district: '', address: '', price: 0, contact: '' });
const [selectedCategory, setSelectedCategory] = useState('');
const [isVisible, setIsVisible] = useState(false);
 const { locations } = useAppSelector((store) => store.locationsSlice);
 const handleFilter = (category) => {
  setSelectedCategory(category);
};

const filteredLocations = selectedCategory
  ? locations.filter((location) => location.category === selectedCategory)
  : locations;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <h1>Площадки для занятий спортом</h1>

      <div>
        <Button variant="primary" onClick={() => {toggleVisibility(); handleFilter('')}}>
          Категория
        </Button>
        {isVisible && (
          <div className='isVisibleBtn'>
            <Button variant="primary btnCategory" onClick={() => handleFilter('Теннисный корт')}>
              Теннисный корт
            </Button>
            <Button variant="primary" onClick={() => handleFilter('Футбольное поле')}>
              Футбольное поле
            </Button>
            <Button variant="primary" onClick={() => handleFilter('Лед')}>
              Лед
            </Button>
          </div>
          )}
        {/* Добавьте кнопки для других категорий */}
      </div>

        {/* {locations && 
        locations.map((location: ILocation) => { */}
          <div key={location.id} className='location'>

            <div className='location_picture'>
              <img className='location_photo' src="https://www.sport-pl.ru/images/editor/444/10.01.20/Pyatigorsk.jpg" alt="place" />
              <div className='location_price'>{location.price}1000 руб./час</div>
            </div>
            
            <div className='location_info'>
              <h5 className='location_title'>{location.title}Просторный уличный корт</h5>
              <ul className="location_ul">
                <li className="location_category">
                  <img src="../../img/icons_locations/icon-category.svg" alt="" />
                  {location.category}
                  Категория: Теннисный корт</li>
                <li className="location_district">{location.district}Район: г. Москва, Юго-Западная</li>
                <li className="location_address">{location.address}Адрес: ул. Варваринская д. 29</li>
                <li className="location_contact">{location.contact}тел. +7 (916) 147-82-42</li>
              </ul>
                <button className='btn btn-primary btnBookLocation'>Связаться</button>
            </div>

          </div>
        {/* }) */}
        {/* } */}
    </>
  )
}
