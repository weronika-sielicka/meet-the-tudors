import React from 'react';
import ReactDOM from 'react-dom';
import FilmListItem from '../js/film_list_item.jsx';

const FilmList = (props) => {
  const filmItems = props.films.map((film)=>{
    return <FilmListItem onSelect={props.onSelect} key={film.etag} film={film}/>
  });

  return(
    <ul className="col-md-4 list-group">{filmItems}</ul>
  );
};

export default FilmList;
