import { useState } from 'react';
import api from '../services/api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';

const PER_PAGE = 80;

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const fetchImages = async (query, page) => {
    console.log(query);
    setIsLoading(true);
    try {
      const response = await api.fetchImagesWithQuery(query, page, PER_PAGE);
      const newImages = response.data.hits;
      setTotalPages(Math.ceil(response.data.totalHits / PER_PAGE));
      setImages(prevImages => [...prevImages, ...newImages]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async event => {
    event.preventDefault();
    await setImages([]);
    fetchImages(event.target.query.value, 1);
    setQuery(event.target.query.value);
  };

  const handleLoadMore = event => {
    event.preventDefault();
    fetchImages(query, page + 1);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading ? (
        <Loader />
      ) : (
        images.length > 0 &&
        totalPages > page && <Button onLoadMore={handleLoadMore} />
      )}
    </div>
  );
};
