// In python you can create variables, and import them
// ex:   from file import thisvar 
// but in JS you have to export 

export const x = '1234'


const y = '4567'
const z = '8901'

export{
    y,
    z
}



//default export
// export default class Test{
// }


// every file can have 1 default export
// but only 1
// unlimited regular exports, which are put into a dictionary
// the key is the name and value is value
        // {
        //     x: '1234',
        //     y: '4567',
        //     z: '8901'
        // }


import React, { Component } from 'react';
// you can import from dictionary { Component }
import Nav from './Nav';
// everything else is the default export: Nav


export default class test extends Component {

    constructor(){

    }


  render() {
    return (
      <section className='card'>
    <BrowserRouter>
    
        <div>test</div>

    </BrowserRouter>
    </section>
    )
  }
}
