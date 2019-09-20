import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './styles/styles.css';
import JSON from './db.json';
import NewsList from './components/newsList';
import Footer from './components/footer';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      news: JSON,
      footerText: 'I am the main footer',
      filtered:[]
    }
  }

  getKeywords = (event)=>{

    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {

        return item.title.indexOf(keywords)>-1;
    })

    this.setState({
      filtered:filtered
    })

  }

  render(){

    console.log(this.state.news);
    const state = this.state;

    console.log(state);

    return(
      <>
      <Header keywords = {this.getKeywords}/>
      <NewsList news={state.filtered.length===0? state.news:state.filtered}>
        <br/>
        <h1>I am a News</h1>
      </NewsList>

      <Footer footerText={state.footerText}/>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
