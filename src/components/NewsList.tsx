import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import News from './News';

const NewsList: React.FC = () => {
  const { news } = useContext(NewsContext);

  return (
    <div className="news-container">
      {news.map(article => (
        <News article={article} key={article.title} />
      ))}
    </div>
  );
}

export default NewsList;