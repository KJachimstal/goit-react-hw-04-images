import { PropTypes } from 'prop-types';
export const Button = props => {
  return (
    <button
      className="search-form__button load-more"
      onClick={props.onLoadMore}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
