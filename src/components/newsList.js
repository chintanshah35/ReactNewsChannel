import React from 'react';
import NewsItem from './newsItem'


const NewsList = (props)=>{

  console.log(props);

  const news = props.news.map((item,index)=>(
    <NewsItem item = {item} key={index}/>
  ))

  return (
    <>
      {news}
      {props.children}
    </>
  )
}

export default NewsList;
