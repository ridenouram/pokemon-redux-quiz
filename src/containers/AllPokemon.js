import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAllPokemon, selectAllPokemonError, selectAllPokemonLoading } from '../selectors/allPokemonSelectors';
import PokemonList from '../components/allPokemon/PokemonList';
import { fetchAllPokemon } from '../actions/listActions';
import Paging from '../components/allPokemon/Paging';

class AllPokemon extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemonArr: PropTypes.array.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    page: PropTypes.string
  }


  componentDidMount() {
    console.log(this.props.page);
    this.props.fetch(parseInt(this.props.page, 10));
  }



  render() {
    if(this.props.loading) {
      return <h1>Pokemon are loading</h1>;
    }
    return (
    <>
      <Paging currentPage={((parseInt(this.props.page, 10)) || 1)} />
      <PokemonList pokemonArr={this.props.pokemonArr} />
    </>
    );
  }
}


const mapStateToProps = (state, props) => ({
  pokemonArr: selectAllPokemon(state),
  error: selectAllPokemonError(state),
  loading: selectAllPokemonLoading(state),
  page: props.match.params.page 
});

const mapDispatchToProps = dispatch => ({
  fetch(page) {
    dispatch(fetchAllPokemon(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);
