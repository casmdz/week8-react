// rcc
import React, { Component } from 'react';
import Post from '../Components/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import faUserAstronaut from '@fortawesome/free-solid-svg-icons'
import { FaUserAstronaut } from 'react-icons/fa';
import { BsHeartFill, BsHeart } from "react-icons/bs";


export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      posts: [
        // {id:1, title: 'Post 1', content: 'Content 1'},
        // {id:2, title: 'Post 2', content: 'Content 2'}

      ]
      
    }
  };

  showPosts = () => {
    return this.state.posts.map(p => <Post postInfo={p} />)

    // .map is a loop through the posts list in the constructor
    // for every post that exists 
    // 'for p in posts' generate Post component 
  };

  getPosts = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/posts`);
    const data = await res.json();
    console.log(data)
    // if (data.status === 'ok'){
    //   this.setState({posts: data.posts})}
  }
  componentDidMount = () => {
    this.getPosts();
  }


  render() {
    return (
      <section className='card'>
      <div>
        {this.showPosts()}
      <BsHeartFill />
      <BsHeart />
      <FaUserAstronaut />
        
      </div>
      </section>
      

    )
  }
}
