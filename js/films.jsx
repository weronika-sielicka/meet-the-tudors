import React from 'react';
import ReactDOM from 'react-dom';
import FilmList from '../js/film_list.jsx';
import FilmDetail from '../js/film_detail.jsx';

import YTSearch from 'youtube-api-search';

const YOUTUBE_YOUTUBE_API_KEY = 'AIzaSyA_TQp0e7PA7Oo0Cmu7SoWRXdUmO0Fc6Ls';

class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      selectedFilm: null
    };

    YTSearch({
      key: YOUTUBE_YOUTUBE_API_KEY,
      term: 'tudor documentary'},
      (films) => {
        this.setState({films: films, selectedFilm: films[0]})

    });

  }

  render() {
    return (
      <section id="vidsSection">

        <FilmDetail film={this.state.selectedFilm}/>
        <FilmList onSelect={selectedFilm => this.setState({selectedFilm})} films={this.state.films}/>
      </section>
    )
  }
}
module.exports = Films;
