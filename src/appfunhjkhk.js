
import React, { Component } from 'react'
import { Button } from '@mui/material';
import '../common.css'

export default class Home extends Component {
    constructor() {
        console.log('#1 - constructed (state)')
        super();
        this.state = {
            name: 'Cas'
        }
    }

    render() {
        return (
            <section className='grid-container'>

                <h2>This is the homepage of {this.state.name}</h2>
                <p>{this.props.age}</p>

                <button onClick={this.props.happyBirthday}>+</button>

                <p>{this.props.testVar}</p>

                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </section>)
    }
};