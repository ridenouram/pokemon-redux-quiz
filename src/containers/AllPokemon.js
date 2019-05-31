import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAllPokemon, selectAllPokemonError, selectAllPokemonLoading } from '../selectors/allPokemonSelectors';
import PokemonList from '../components/allPokemon/PokemonList';
import { fetchAllPokemon } from '../actions/listActions';

class AllPokemon extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemonArr: PropTypes.array.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) {
      return <h1>Pokemon are loading</h1>;
    }
    return <PokemonList pokemonArr={this.props.pokemonArr} />;
  }
}

const mapStateToProps = state => ({
  pokemonArr: selectAllPokemon(state),
  error: selectAllPokemonError(state),
  loading: selectAllPokemonLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchAllPokemon());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);
