// import React, { Component } from 'react'
import React from 'react'
import CheckboxList from '../Components/CheckBoxList'


//notes 1:29:00

export default function Doing (props) {
//You dont need this once it's in App.js
    // constructor() { 
    //     super();
        //STEP 1
        //state to track all of my Todo's
        // this.state = {
            // myList: [] //start off with an empty array
    //     }
    // }

    //STEP 2
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const text = e.target.myText.value
        //be able to append... how?
        //what if there is already items in the list? 
        //with JS, use spread operator...
        //or js concatenate arrays... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    //     this.setState({myList: this.state.myList.concat([text])})
    // };



    return (
      <section className='card'>
      <div>
        <h1>Checkbox</h1>
        <p>Enter an item and see your list grow</p>
        <form onSubmit={props.handleDoingSubmit}>
            <input placeholder='Add a To Do Item' name='myText'/> {/* getting the items from this imput */}
            <button type='submit'>Add</button>
        </form>

        {/* how do i sent mySate to checkbox list ?
        then check CheckBoxlist... STEP 4 */}
        <CheckboxList myList = {props.myList} deleteDoing={props.deleteDoing}/> 
        {/* 5 */}
      </div>
      </section>
    )

}

//HOW TO SAVE THE LIST IF WE GO TO ANOTHER PAGE? 1:44:30
//App.js 
//add the myList 
//and the setter function