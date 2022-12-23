import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { SearchBox } from './components/search-box/search-box.components';
import {CardList} from './components/card-list/card-list-components';

class App extends Component{

  constructor(){

    super();
      this.state = {
        SearchField: '',
        monsters:[
        ]
        
      
    };
    console.log('Constructor')
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({monsters:users}))
    console.log('DidMount')
  }
  render(){

    const {SearchField , monsters } = this.state;
    const filteredMostered = monsters.filter( monsters => 
      monsters.name.toLowerCase().includes(SearchField.toLowerCase())
      )
    return(
          <div className="App">
            <h1> Monster Rolerdex</h1>
            <SearchBox
              placeholder = 'Search'
              handleChange ={typedInput => this.setState({ SearchField: typedInput.target.value})}
            />
            <CardList monsters = {filteredMostered}/>
            {console.log('Hello')}
        </div>
    );
  }
}

export default App;
