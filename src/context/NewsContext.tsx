import React, { useState, createContext } from 'react';

import { IArticle } from '../interfaces';

export const NewsContext = createContext({
  news: [] as IArticle[],
  getArticles: (search: string) => { }
});

const NewsProvider: React.FC = ({ children }) => {
  const [news, setNews] = useState<IArticle[]>([]);

  const getArticles = async (search: string) => {
    const url = `http://newsapi.org/v2/everything?q=${search}&apiKey=441d44f13af94993b7a122230543511f`

    const res = await fetch(url);
    const data = await res.json();

    setNews(data.articles);
  }


  return (
    <NewsContext.Provider
      value={{
        news,
        getArticles
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}


export default NewsProvider;