import React from 'react';

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
    return <span>{location.state.props.title}</span>;
  }
}
export default Detail;
