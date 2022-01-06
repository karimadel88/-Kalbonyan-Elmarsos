import React from 'react';
import ReactDOM from 'react-dom';
// // import App from './App';
// import Counter from './Counter';

// ReactDOM.render(
//   <React.StrictMode>
  
//     {/*<App />*/}
//     <Counter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Main data in my App
const app = {
  title : 'Indecision App',
  subtitle : 'How to Be better in this life',
  options : []
};

// Function to add task and prevent reload to form
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
      app.options.push(option);
      e.target.elements.option.value = ''
    }
    renderIndecisionApp();
}

// Funtion To remove all tasks
const removeAll = () => {
  app.options = []
  renderIndecisionApp();
}

// Function to setup alert choose randomly task 
const whatDo = () => {
  const len = app.options.length;
  const randomIndex = Math.floor((Math.random() * len));
  alert(app.options[randomIndex]);
  renderIndecisionApp();
}

// DOM to view details of page
const appRoot = document.getElementById('root');

// Main fumction to render state
const renderIndecisionApp = () =>{ 
  const template = (
          <div>
              <h1>{app.title}</h1>
              {app.subtitle && <p>{app.subtitle}</p>}
              {app.options.length > 0 ? <p>Here are your options</p> : "No options"}
              <button disabled = {app.options.length===0} onClick={whatDo}>What I should do ?</button>
              <button onClick={removeAll}>Remove All</button>
              <ol>
                {app.options.map((option)=><li key={option}>{option}</li>)}
              </ol>
              <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button >Add Option</button>
              </form>
          </div>
    );

  // To render template1    
  ReactDOM.render(template,appRoot);
}

renderIndecisionApp();