import React, { useState, useEffect } from 'react';


export default function FUNCTEST(props) {  //creating a State
    // default == default export , can be called whatever you want when you import it somewhere else ( see app.js )
    //PROPS :  you can also DESTRUCTURE Props 
    // ===> FUNCTEST({parentsAge, happyBirthday})

    const constructing = () => {
        console.log('i am constructing')
        return 9000
    }
    //how do we create a state?
    //since functions do not have attribute (no  this.something)
    //react created something called a hook https://reactjs.org/docs/hooks-intro.html
    //the 2 hooks to learn are useState and useEffect 

    // useState()
    //useState returns 2 things, a STATE variable and a function to update STATE
    //SYNTAX: const [myState, updateMyState] = useState();

    //const [age, setAge] = useState(9000);
    const [age, setAge] = useState(constructing);
                //use state takes in a literal (a value)



    //how to recreate the "Mounting" lifecycle event
    //this is where useEffect() is called
    //useEffect does not return anything
    //it takes in 2 arguments, a callback function and an array of dependencies
    //useEffect will call the function everytime something in the array changes

    //useEff takes in a function and a list
    //every time age changes, the function will be called
    useEffect(() => {console.log('side effect is happening')}, [age])

    //so how does this affect mounting? 
    // if array is empty, nothing will change, and effect runs only once after the first render
    useEffect(() => {console.log('this is like a MOUNT')}, []) //is mimicking 


    const addToAge = () => {
        setAge(age + 10);
    }
    


    // in a functional component, whatever we return is what gets rendered

    const msgWhenRender = () => {
        console.log('#1 I RENDERED!!')
    };

  return (
    <section className='card'>
    <div>
        {msgWhenRender()}
        My age is {age}
        {/* there is no class. i can just say age instead of this.state.age */}
        <button onClick={addToAge}>+</button>
        <br></br>
        My parents age is {props.namethiswhatever}
        <button onClick={props.happyBirthday}>+</button>
        {/* instead of props ===> (parentsAge, happyBirthday) */}

        {/* 
        props is a dictionary with the 
        key age(namethiswhatever) and the value is 9000
        key Happ Bday and the value setter function
        */}


    </div>
    </section>
  )
}
