import { Component } from 'react';
import api from '../services/api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 80,
    totalPages: 0,
    query: '',
  };

  fetchImages = async query => {
    this.setState({ isLoading: true });
    try {
      const response = await api.fetchImagesWithQuery(
        query,
        this.state.page,
        this.state.perPage
      );
      const images = response.data.hits;
      this.setState({
        totalPages: Math.ceil(response.data.totalHits / this.state.perPage),
      });
      this.setState({ images: this.state.images.concat(images) });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = async () => {
    await this.setState({ page: 1, query: '', images: [] });
    this.fetchImages();
  };

  handleSearch = async event => {
    event.preventDefault();
    const query = event.target.query.value;
    await this.setState({ page: 1, query, images: [] });
    this.fetchImages(query);
  };

  handleLoadMore = async event => {
    event.preventDefault();
    const { query } = this.state;
    await this.setState({ page: this.state.page + 1 });
    this.fetchImages(query);
  };

  render() {
    const { images, isLoading, error, totalPages, page } = this.state;

    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 &&
          totalPages > page && <Button handleLoadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
