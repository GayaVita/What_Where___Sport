import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IMapState, getCoords, setCoords } from '../../store/mapSlice/slice';

interface IMapProps {
  setFormData: () => void
}
export default function Map({setFormData}: IMapProps) {

  const [myMap, setMyMap] = React.useState<ymaps.Map | null>(null);
  // const [address, setAddress] = React.useState({
  //   location_address: ''
  // });
  // const [coords, setCoords] = useState(null);
  const { ymaps } = window;
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState<IMapState>({ coords: [], location_address: '' });
  // console.log('data', data);
  // const navigate = useNavigate();
  const { coords, location_address } = useAppSelector((store) => store.mapSlice);
  console.log('data', data)
  console.log(coords, location_address);
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
    }
    ymaps.ready(init);
  }, []);

  myMap?.events.add('click', (e) => {
    if (!myMap.balloon.isOpen()) {
      const coords = e.get('coords');
      // console.log('address', address);
      const myGeocoder = ymaps.geocode(coords);
      console.log('myGeocoder', myGeocoder);
      let city = '';
      let address = '';
      myGeocoder
        .then((res) => {
          const nearest = res.geoObjects.get(0);
          // const name = nearest.properties.get('text');
          // console.log('city', nearest.properties._data.description);
          city = nearest.properties.get('description').toString();
          address = nearest.properties.get('name').toString();
          // setFormData({...formData, coords: coords, location_address: address })
          // setData({ ...data, city: city.toString(), address: address.toString() });
          // console.log('city', nearest.properties.get('description'));
          // console.log('address', nearest.properties._data.name);
          // console.log('name', name);
        })
        .then(() => {
          myMap.balloon.open(coords, {
            contentHeader: 'Вы можете добавить новое место здесь!',
            contentBody: `
            <div>
              <p>${city}</p>
              <p>${address}</p>
            </div>
          `,
            contentFooter:
              '<button type="button" class="btn sixth" id="addPlaceButton">Добавить место</button>',
          });
          setTimeout(() => {
            document
              .getElementById('addPlaceButton')
              .addEventListener('click', () => {
             
                setFormData({...formData, coords: coords, location_address: address }); // ЛОГИКА КЛИКА ПО КНОПКЕ ЗДЕСЬ
              });
          }, 0);
        });
    } else {
      myMap.balloon.close();
      // setDisplayNewMarker(false);
    }
  });

  return (
<div
        id="map"
        className="map"
        style={{
          width: '500px',
          height: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
  )
}
