import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory,
  browserHistory
} from 'react-router';

const Main = require('../js/main.jsx');
const NotFound = require('../js/notfound.jsx');
const About = require('../js/about.jsx');
const Films = require('../js/films.jsx');

document.addEventListener('DOMContentLoaded', function() {

  class Template extends React.Component
  {
    render() {

      return (
        <div>
          <div id="menu">
            <IndexLink to="/" id="menuHome">MEET THE TUDORS</IndexLink>
            <div>
              <IndexLink to="/films" id="menuFilms">Films</IndexLink>

            <IndexLink to="/about" id="menuAbout">About</IndexLink>
            </div>
          </div>
          <div>
            {this.props.children}
          </div>
          <footer>
&copy; 2017 Weronika Sielicka
          </footer>
        </div>
      )
    }
  }

  class App extends React.Component {
    render() {
      return (
        <Router history={hashHistory}>
          <Route path="/" component={Template}>
            <IndexRoute component={Main}/>
            <Route path="/about" component={About}/>
              <Route path="/films" component={Films}/>

            <Route path="*" component={NotFound}/>
          </Route>
        </Router>
      )
    }
  }

  ReactDOM.render(
    <App/>, document.getElementById('root'));
});
