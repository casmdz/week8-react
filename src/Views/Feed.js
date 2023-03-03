// rcc
import React, { Component } from 'react';
import Post from '../Components/Post';

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      posts: [
        {id:1, title: 'Post 1', content: 'Content 1'},{id:2, title: 'Post 2', content: 'Content 2'},{}

      ]
      
    }
  };

  showPosts = () => {
    return this.state.posts.map(p => <Post key={p.id} postInfo={p} />)
    // .map is a loop through the posts list in the constructor
    // for every post that exists 
    // 'for p in posts'
  };



  render() {
    return (
      <div>Feed
        {this.showPosts()}
      </div>
      

    )
  }
}
