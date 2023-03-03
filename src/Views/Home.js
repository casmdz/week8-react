import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        console.log('#1 - constructed (state)')
        super();
        this.state = {
            name: 'Shoha'
            // state is on a higher level that never closes
        }
    }

    componentDidMount () {
        console.log('#3 did mount ')
    }

    

    render() {
        console.log('#2 am rendered')
        return (
            <div>
                <h1>This is the Home page</h1>
                <h2>This is the homepage of {this.state.name}</h2>
                <p>{this.props.age}</p>
                <button onClick={this.props.happyBirthday}>+</button>
                {/* .props brings variables and functions from App */}


                <p>{this.props.testVar}</p>
                {/* <p>{this.props.xD}</p> */}

            </div>
        )
    }
};