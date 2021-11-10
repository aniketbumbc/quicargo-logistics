import GoogleMapReact from 'google-map-react';
import { LAT_N_LON_MAP, ZOOM_LEVEL } from '../../../constant/constant';
import './map.scss';

const Map = () => {
  const MAP_KEY = process.env.REACT_APP_MAP_KEY!;
  return (
    <div className='map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={LAT_N_LON_MAP}
        defaultZoom={ZOOM_LEVEL}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
