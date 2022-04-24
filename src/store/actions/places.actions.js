import {PLACES} from '../types';
//import RNFS from 'react-native-fs';
import { insertPlace, fetchPlaces } from '../../db/index';
//import {MAPS} from '../../constants/index';

const {ADD_PLACE, LOAD_PLACES} = PLACES;

export default {
  addPlace: (name, address, latitude, longitude) => {
    return async dispatch => {

      try {
        /*const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${MAPS.API_KEY}`,
        );

        if (!response.ok)
          throw new Error('Nose ha podido obtener la dirección');

        const data = await response.json();

        if (!data.results)
          throw new Error('Nose ha podido obtener la dirección');
        console.warn('data.results', data);
        const address = data.results[0].formatted_address;
        await RNFS.copyFile(image, Path);
        */
        const result = await insertPlace(
          name,
          address,
          latitude,
          longitude,
        );
        dispatch({
          type: ADD_PLACE,
          place: {
            id: result.insertId,
            name,
            address,
            latitude,
            longitude,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
  loadPlaces: () => {
    return async dispatch => {
      try {
        const result = await fetchPlaces();
        dispatch({
          type: LOAD_PLACES,
          place: result,
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
};

