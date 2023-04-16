import { Component } from 'react';
import { PropTypes } from 'prop-types';
export class Button extends Component {
  render() {
    return (
      <button
        className="search-form__button load-more"
        onClick={this.props.onLoadMore}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
