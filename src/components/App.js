import React from 'react';
import AllPokemon from '../containers/AllPokemon';
import PokemonDetail from '../containers/PokemonDetail';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Link to="/">All Pokemon</Link>
      <Switch>
        <Route exact path="/" component={AllPokemon} />
        <Route path="/:id" component={PokemonDetail} />
      </Switch>
    </Router>
  );
}
