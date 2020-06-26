import React from 'react';

import { IArticle } from '../interfaces';

type NewsProps = {
  article: IArticle
}

const News: React.FC<NewsProps> = ({ article }) => {
  return (
    <div className="card">
      <img src={article.urlToImage} alt={article.title} className="card-img" />
      <div className="card-body">
        <h2 className="new-title">{article.title}</h2>
        <a className="button-read" href={article.url} target="_blank" rel="noopener noreferrer" >
          Read
        </a>
      </div>
    </div>
  );
}

export default News;