import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        console.log('#1 - constructed (state)')
        super();
        this.state = {
            name: 'Shoha',
            age: 9000
        }
    }

    componentDidMount () {
        console.log('#3 did mount ')
    }

    happyBirthday = () => {     // arrow function is necessary otherwise you would have to bind() this method 
        console.log('yesh the button was clicked')
        // this.state.age += 1 this way is incorrect
        //instead use setter method
        this.setState({age: this.state.age + 1})
    }

    render() {
        console.log('#2 am rendered')
        return (
            <div>
                <h1>This is the Home page</h1>
                <h2>This is the homepage of {this.state.name}</h2>
                <p>{this.state.age}</p>
                <button onClick={this.happyBirthday}>+</button>


                <p>{this.props.testVar}</p>

            </div>
        )
    }
};