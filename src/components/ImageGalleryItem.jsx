import { Component } from 'react';
import { PropTypes } from 'prop-types';
export class ImageGalleryItem extends Component {
  render() {
    const { src, alt, id, onClick } = this.props;

    return (
      <li className="gallery__item">
        <img
          className="gallery__item-image"
          src={src}
          alt={alt}
          onClick={() => onClick(id)}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};
