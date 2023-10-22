import React from 'react';
import { useGlobalContext } from '../context/appContext';

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (searchValue.current) {
      searchValue.current.focus();
    }
  }, []);

  const searchCocktail = () => {
    if (searchValue.current) {
      setSearchTerm && setSearchTerm(searchValue.current.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};
