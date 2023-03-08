import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <section className='card'>
            <div className="card" style={{width: '18rem', backgroundColor: 'dodgerblue'}}>

                <img src={this.props.postInfo.img_url} className="card-img-top" alt="descr" />
                <div className="card-body">

                    <h5 className="card-title">{this.props.postInfo.title} - {this.props.postInfo.author}</h5>
                    {/* <h5 className="card-title">Title - Author</h5> */}
                    
                    <p className="card-text">{this.props.postInfo.caption}</p>
                    
                    <button href="#" className="btn btn-primary">Click Me</button>
                    {/* <a href="#" className="btn btn-primary">Click Me</a> */}
                </div>
            </div>
            </section>
        )
    }
}