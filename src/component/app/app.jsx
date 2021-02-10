import React from 'react';
import PropTypes from 'prop-types';
import HeadScreen from '../head-screen/head-screen.jsx';

const App = (props) => {
  const {genre, year, title, arrayCards} = props;

  return (
    <HeadScreen arrayCards={arrayCards} genre={genre} year={year} title={title} />
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  arrayCards: PropTypes.array.isRequired
};

export default App;
