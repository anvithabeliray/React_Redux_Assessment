import axios from "axios";
import ACTION_TYPES from "./actionTypes";

const getAbilities = (name) => async (dispatch) => {
  await axios
    .get('https://pokeapi.co/api/v2/pokemon/' + name)
    .then((res) => {
      dispatch(getData(res.data));
    })
    .catch((error) => {
      dispatch(getError(error));
    });
};
const getData = (result) => {
  return {
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: result.abilities,
  };
};
const getError = (error) => {
  return {
    type: ACTION_TYPES.FETCH_FAIL,
    payload: true,
  };
};
export default getAbilities;
