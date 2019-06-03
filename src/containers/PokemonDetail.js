import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FullPokemon from '../components/pokemonDetail/FullPokemon';
import { fetchSinglePokemon } from '../actions/detailActions';
import { selectOnePokemon, selectOnePokemonError, selectOnePokemonLoading } from '../selectors/pokemonDetailSelectors';

class PokemonDetail extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemon: PropTypes.object.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  };

  

  componentDidMount() {
    this.props.fetch(this.props.id);
  }

  render() {
    if(this.props.loading) {
      return <h1>Your pokemon is loading</h1>;
    }
    return <FullPokemon pokemon={this.props.pokemon} />;
  }
}

const mapStateToProps = (state, props) => ({
  pokemon: selectOnePokemon(state),
  error: selectOnePokemonError(state),
  loading: selectOnePokemonLoading(state),
  id: props.match.params.id
});

const mapDispatchToProps = dispatch => ({
  fetch(id) {
    dispatch(fetchSinglePokemon(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
