import { PropTypes } from 'prop-types';
export const ImageGalleryItem = ({ src, alt, id, onClick }) => {
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
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};
