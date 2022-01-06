import React from 'react'
import ReactDom from 'react-dom';

// Header have to text 
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Make You Life Best</h2>
      </div>
    )
  }
}

// Action to know what do

class Action extends React.Component {
  render(){
    return(
      <button>What I should do ?</button>
    )
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>Option here</div>
    );
  }
}

class AddOption extends React.Component {
  render(){
    return(
      <di>Add Option feild</di>
    )
  }
}
 
const template = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)

ReactDom.render(template,document.getElementById('root'));