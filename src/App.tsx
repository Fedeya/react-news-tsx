import React from 'react';

import Search from './components/Search';
import NewsList from './components/NewsList';

import NewsProvider from './context/NewsContext';

function App() {
  return (
    <NewsProvider>
      <div className="container">
        <h1>REACT NEWS</h1>
        <Search />
        <NewsList />
      </div>
    </NewsProvider>
  )
}

export default App;
