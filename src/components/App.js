import React from 'react';
import AllPokemon from '../containers/AllPokemon';
import PokemonDetail from '../containers/PokemonDetail';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return (
    <Link to="/1">All Pokemon</Link>
  );
}

export default function App() {
  return (
    <Router>
      <h1>So Many Pokeman</h1>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path="/:page" component={AllPokemon} />
        <Route path="/detail/:id" component={PokemonDetail} />
      </Switch>
    </Router>
  );
}
