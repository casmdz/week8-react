
import React, { Component } from 'react'
import RecipeReviewCard from '../Components/ExampleCard'
import '../common.css'

export default function ToDo(props) {
    // constructor(){
    //     super();
    // }


    return (
        <section className='card'>
        <div>

            <h1>This is my todo list</h1>
            <br />
            <RecipeReviewCard />;

        </div>
        </section>
    )

}
