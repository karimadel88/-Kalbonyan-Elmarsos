import React from "react";
import reactDom from "react-dom";
// import reactDom from "react-dom";
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('root');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Counter : {count}</h1>
            <button id='my-id' className='myBtn' onClick= {addOne}>+1</button>
            <button onClick ={minusOne}>-1</button>
            <button onClick ={reset}>Reset</button>
        </div>
    );
    reactDom.render(template,appRoot);
}

renderCounterApp();

