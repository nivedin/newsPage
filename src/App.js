import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  //newapi//REACT_APP_API_KEY = dc668f6769f5419388409d3b8cff9b1b
  //NYnewapi//REACT_APP_API_KEY = dOHHYL3jcwhwDaSgGwgtkUiH0pHDr3Nt

  function getNews() {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crimes&page=${3}&api-key=${process.env.REACT_APP_API_KEY}`).then(response => {
      // console.log(response);
      setArticles(response.data.response.docs)
    }).catch(error => {
      console.log(error);
    })
  }


  useEffect(() => {
    getNews();
    // axios.get(`https://api.nytimes.com/svc/topstories/v2/upshot.json?api-key=${process.env.REACT_APP_API_KEY}`).then(response => {
    //   console.log(response);
    //   setArticles(response.data.results)
    // }).catch(error => {
    //   console.log(error);
    // })
    // axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.REACT_APP_API_KEY}`).then(response => {
    //   setArticles(response.data.articles)
    // }).catch(error => {
    //   console.log(error);
    // })
  }, [])

  console.log("articles", articles);


  return (
    <div className="app">
      <div className="header">
        <h1>
          Gopal Chronicles
      </h1>
      </div>
      <div className="articlesContainer">
        {articles ? (
          articles?.map((article, i) => (
            <Article key={i}
              title={article.headline.main}
              description={article.lead_paragraph}
              image={article.multimedia[1]?.url}
              link={article.web_url}
              publishedAt={article.pub_date}
            />
            /* <Article key={i}
              title={article.title}
              description={article.description}
              image={article.multimedia[0].url}
              link={article.url}
              publishedAt={article.created_date}
            /> */
          ))
        ) : null}
      </div>

    </div>
  );
}

export default App;
