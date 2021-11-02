import uuid from "uuid";

export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(), 
        name: action.payload.name
      }
      return {bands: state.bands.concat(band)};
    case "DELETE_BAND":
      return {bands: state.bands.filter((band) => band !== action.payload) };
    default:
      return state
  
  }
};
