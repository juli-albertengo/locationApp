import Place from '../../models/place/index';
import {PLACES} from '../types/index';

const {ADD_PLACE, LOAD_PLACES} = PLACES;

const initialState = {
  places: [],
};

const placesReducer =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.place.id,
        action.place.name,
        action.place.address,
        action.place.latitude,
        action.place.longitude,
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    case LOAD_PLACES:
      return {
        ...state,
        places: action.place.map(
          item =>
            new Place(
              item.id,
              item.name,
              item.address,
              item.latitude,
              item.longitude,
            ),
        ),
      };
    default:
      return state;
  }
};

export default placesReducer;
