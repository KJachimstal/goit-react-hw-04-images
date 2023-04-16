import { PropTypes } from 'prop-types';

export const Searchbar = props => {
  return (
    <header className="search-bar">
      <form className="search-form" onSubmit={props.onSearch}>
        <input
          className="search-form__input"
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit" className="search-form__button">
          <span className="search-form__button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
