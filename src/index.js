// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// define component functions

// function getButtonText() {
//   return 'Button Text';
// }

// create a function-based React component

const App = function() {
  const buttonText = {
    text: 'Click Me'
  };

  const style = {
    backgroundColor: 'blue',
    color: 'white'
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name"/>
      <button style={style}>{buttonText.text}</button>
    </div>
  );
}

// take the react component and display in browser
ReactDOM.render(
  <App/>, document.querySelector('#root'));
