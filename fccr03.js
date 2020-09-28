'use strict';

const JSX = (
  <div>
    {/* This is a comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

const MyComponent = () => {
  return JSX;
};

const domContainer = document.querySelector('#container');
ReactDOM.render(<MyComponent />, domContainer);
