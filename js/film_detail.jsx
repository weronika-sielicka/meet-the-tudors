import React from "react";
import ReactDOM from 'react-dom';

const FilmDetail = ({film}) => {
  if (film) {
    const filmId = film.id.videoId;
    const url = `https://www.youtube.com/embed/${filmId}`;

    return (
      <div className="film-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}/>
        </div>
        <div className="details">
          <div className="title">{film.snippet.title}</div>
          <div className="description">{film.snippet.description}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="load">
        <img src="../images/loader.svg"/>
      </div>
    )
  }

};

export default FilmDetail;
