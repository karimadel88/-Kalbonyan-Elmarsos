import React from 'react'
import ReactDom from 'react-dom';

// IndecisionApp
class IndecisionApp extends React.Component {

  render(){
    const title = 'Indecition App';
    const subtitle = 'Put Your Life In Your Computer'
    const options = ['One','Two','Three'];

    return(
      <div>
        <Header title = {title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
    </div>
    )
  }
}

// Header have to text 
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

// Action to know what do

class Action extends React.Component {
  handleBack(){
    alert('Test ..');
  }
  render(){
    return(
      <button onClick={this.handleBack}>What I should do ?</button>
    )
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options);
  }

  render(){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText = {option}/>)
        }
      </div>
    );
  }
}


class Option extends React.Component {
  render () {
    return (
      <div>{this.props.optionText}</div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if(option){
      e.target.elements.option.value = ''
      alert('option');
    }
  }

  render(){
    return(
      <di>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button >Add Option</button>
        </form>
      </di>
    )
  }
}
 
    // const template = (
    //   <div>
    //     <Header />
    //     <Action />
    //     <Options />
    //     <AddOption />
    //   </div>
    // )

ReactDom.render(<IndecisionApp />,document.getElementById('root'));