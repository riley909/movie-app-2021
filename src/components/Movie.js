import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
  return (
    <Link
      className='default-link'
      to={{
        pathname: `/movie/${props.id}`,
        state: {
          props,
        },
      }}>
      <div className='movie'>
        <img src={props.poster} alt={props.title} title={props.title} />
        <div className='movie__data'>
          <h3 className='movie__title'>{props.title}</h3>
          <h5 className='movie__year'>{props.year}</h5>
          <div className='genre'>
            {props.genres.map((genre, idx) => {
              return (
                <div key={idx} className='genre__genre'>
                  {genre}
                </div>
              );
            })}
          </div>
          <p className='movie__summary'>{props.summary.slice(0, 120)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
