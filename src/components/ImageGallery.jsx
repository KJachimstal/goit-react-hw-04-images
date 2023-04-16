import { useState } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import * as React from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

export const ImageGallery = props => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const onClick = id => {
    const index = props.images.findIndex(image => image.id === id);
    if (index < 0) {
      alert('Image not found!');
    } else {
      setIndex(index);
      setOpen(true);
    }
  };

  const { images } = props;
  return (
    <>
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem
            src={image.previewURL}
            alt={image.tags}
            id={image.id}
            key={nanoid()}
            originalSrc={image.largeImageURL}
            onClick={onClick}
          />
        ))}
      </ul>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        controller={{ closeOnBackdropClick: true }}
        slides={images.map(image => ({ src: image.largeImageURL }))}
      />
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
