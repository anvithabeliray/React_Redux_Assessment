import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import React, { Component } from 'react';
import Data from './src_code/mock/valuesMock';
import './src_code/styles/App.css';
import PokemonList from './src_code/components/pokemonList';
import Todo from './src_code/components/Todo';
import Container from './src_code/container/Container';

class App extends Component {
  render() {
    return (
        <Router>
            <div>   
                <ol>
                    <li id="1"><Link to="/Todo">TODO APP</Link></li>
                    <li id="2"><Link to="/pokemonList">PokemonList</Link></li>
                </ol>
                <Switch>    
                    <Route exact path='/Todo' component={Todo}></Route>
                    <Route exact path='/pokemonList' component={Container}>
                        <Container Content={this.props.Content} />
                   </Route>    
                </Switch>   
            </div>
        </Router>
    );
  }
}
App.defaultProps = { Content: Data }
export default App;

