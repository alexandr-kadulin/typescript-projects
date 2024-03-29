import { useGlobalContext } from '../context/appContext';

export const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery && setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};
