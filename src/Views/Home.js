import React, { Component } from 'react'
import { Button } from '@mui/material';
import './Home.css'


export default class Home extends Component {
    constructor() {
        console.log('#1 - constructed (state)')
        super();
        this.state = {
            name: 'Cas'
            // state is on a higher level that never closes
        }
    }

    componentDidMount() {
        console.log('#3 did mount ')
    }



    render() {
        console.log('#2 am rendered')
        return (
            <section className='card'>

                <h2>This is the homepage of {this.state.name}</h2>
                <p>{this.props.age}</p>

                <button onClick={this.props.happyBirthday}>+</button>
                {/* .props brings variables and functions from App */}


                <p>{this.props.testVar}</p>
                {/* <p>{this.props.xD}</p> */}

                <Button variant="contained" color="primary">
                    Hello World
                </Button>

            </section>
        )
    }
};