import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app.jsx';


const genre = `Drama`;
const year = 2015;
const title = `The Grand Budapest Hotel`;
const arrayCards = Array(16).fill(1);

ReactDOM.render(
    <App
      genre={genre}
      year={year}
      title={title}
      arrayCards={arrayCards}
    />,
    document.querySelector(`#root`)
);
