
import getAbilities from "../actions/action-get-values";
import { connect } from "react-redux";
import PokemonList from "../components/pokemonList";

export const mapStateToProps = (state) => {
  return {
    result: state.event.result,
    error: state.event.error,
  };
};
export const mapDispatchProps = (dispatch) => ({
  getAbilities: (name) => dispatch(getAbilities(name)),
});

export default connect(mapStateToProps, mapDispatchProps)(PokemonList);

 