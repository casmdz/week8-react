import React, { Component } from 'react'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
            // if it was a functional component:
            //  const [articles, setArticles] = useState([]);
        }
    }
// 1 
    getNews = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=education&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6');
        const data = await res.json();
        const articles = data.articles;
        this.setState({articles: articles})
    }

    componentDidMount(){
        //this becomes very helpful when dealing with ASYNC actions
        console.log(this.state.articles)
        setTimeout(this.getNews, 2000)
    }

    //for loop
    showArticles = () => {
        return this.state.articles.map(a=> <div>{a.title}</div>)
    };


  render() {
    return (
        <section className='card'>
      <div>
        <h1>News</h1>
        {/* SHOW ARTICLES HERE */}
        
        {this.state.articles.length===0?<p>loading..</p>:this.showArticles()}
        

        </div>
        </section>
    )
  }
};