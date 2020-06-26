import React, { useContext, useState } from 'react';
import { NewsContext } from '../context/NewsContext';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const { getArticles } = useContext(NewsContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    getArticles(search);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-field"
        onChange={e => setSearch(e.target.value)}
        value={search} type="text"
        placeholder="Search"
      />
    </form>
  );
}

export default Search;