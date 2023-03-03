import React, { Component } from 'react'
// import Home from './Views/Home'
import Nav from './Components/Nav'
import News from './Views/News'
import Feed from './Views/Feed'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      test: 0,
      age: 9000  
      // the State is now on the same page
    }
  }

  happyBirthday = () => {     // arrow function is necessary otherwise you would have to bind() this method 
    console.log('yesh the button was clicked')
    // this.state.age += 1 this way is incorrect
    //instead use setter method
    this.setState({age: this.state.age + 1})
}



  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            {/* <Route path='/' 
            element={<Home testVar={this.state.test} x='5000' age={this.state.age} happyBirthday={this.happyBirthday} />} 
            /> */}

            <Route path='/news' element={<News />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>

        </div>
      </BrowserRouter>
    )
  }
}