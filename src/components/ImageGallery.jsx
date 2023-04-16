import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import * as React from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

export class ImageGallery extends Component {
  state = {
    open: false,
    index: 0,
  };

  setOpen = value => this.setState({ open: value });

  onClick = id => {
    const index = this.props.images.findIndex(image => image.id === id);
    if (index < 0) {
      alert('Image not found!');
    } else {
      this.setState({ index });
      this.setOpen(true);
    }
  };

  render() {
    const { images } = this.props;
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
              onClick={this.onClick}
            />
          ))}
        </ul>
        <Lightbox
          open={this.state.open}
          close={() => this.setOpen(false)}
          index={this.state.index}
          controller={{ closeOnBackdropClick: true }}
          slides={images.map(image => ({ src: image.largeImageURL }))}
        />
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
