import React from 'react';
import ReactDOM from 'react-dom';

const FilmListItem = ({film, onSelect})=>{
const imageUrl = film.snippet.thumbnails.default.url;

return(
<li onClick={()=>onSelect(film)}   className="list-group-item">
  <div className="film-list media">
    <div className="media-left">
      <img className="media-object" src={imageUrl}/>
      </div>
      <div className="media-body">
        <div className="media-heading title">{film.snippet.title}</div>
        </div>
      </div>
    </li>


);



};

export default FilmListItem;
