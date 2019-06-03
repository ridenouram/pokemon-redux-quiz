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
      <Link to="/1">All Pokemon</Link>
      <Switch>
        <Route exact path="/:page" component={AllPokemon} />
        <Route path="/detail/:id" component={PokemonDetail} />
      </Switch>
    </Router>
  );
}
