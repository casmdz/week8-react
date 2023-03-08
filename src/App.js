import React, { Component } from 'react'
import Home from './Views/Home'
import Nav from './Components/Nav'
import News from './Views/News'
import Feed from './Views/Feed'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import ToDo from './Views/ToDo'
import FUNCTEST from './Components/test'
import Doing from './Views/Doing'


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      test: 0,
      age: 9000,
      // the State is now on the same page
      myList: []
    }
  }

  happyBirthday = () => {     // arrow function is necessary otherwise you would have to bind() this method 
    console.log('yesh the button was clicked')
    // this.state.age += 1 this way is incorrect
    //instead use setter method
    this.setState({age: this.state.age + 1})
}


addToDoing = (e) => {
  e.preventDefault();
  const text = e.target.myText.value
  this.setState({myList: this.state.myList.concat([text])})
};

// step 5 of Doing.js, deleting item, changing state
deleteDoing =(indexToDelete) => {
  const copy = [...this.state.myList]
  copy.splice(indexToDelete, 1)
  this.setState({myList: copy})
}




  render() {
    return (
      <StyledEngineProvider>
      <BrowserRouter>
      {/* anything inside the Browser Router will be aware of the ROUTES we create
        sort of like @app.route or @poke.route    */}

        <div>
          <Nav />
          <Routes>
            {/* curly braces to add JS */}
            <Route path='/' 
            element={<Home testVar={this.state.test} x='5000' age={this.state.age} happyBirthday={this.happyBirthday} />} 
            />

            <Route path='/news' element={<News />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/todo' element={<ToDo />} />
            <Route path='/doing' element={<Doing myList = {this.state.myList } handleDoingSubmit = {this.addToDoing} deleteDoing={this.deleteDoing} />} />
            <Route path='/test' element={<FUNCTEST namethiswhatever={this.state.age} happyBirthday={this.happyBirthday} />} />
          </Routes>

        </div>
      </BrowserRouter>
      </StyledEngineProvider>
    )
  }
}