import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Searchbar extends Component {
  render() {
    return (
      <header className="search-bar">
        <form className="search-form" onSubmit={this.props.handleSearch}>
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
  }
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
