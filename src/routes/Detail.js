import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { location, history } = this.props;
    console.log(this.props);
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className='detail__container'>
          <div className='detail__flexbox'>
            <img src={location.state.props.poster} />
            <div className='detail__data'>
              <div className='detail__title'>{location.state.props.title}</div>
              <div className='detail__year'>{location.state.props.year}</div>
              <div className='detail__genre'>
                {location.state.props.genres.map((genre, idx) => {
                  return (
                    <div key={idx} className='detail__genre__genre'>
                      {genre}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='detail__summary'>{location.state.props.summary}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
