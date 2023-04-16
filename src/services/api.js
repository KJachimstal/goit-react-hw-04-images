import axios from 'axios';

export const fetchImagesWithQuery = async (searchQuery, page, perPage) => {
  const response = await axios.get('https://pixabay.com/api/?', {
    params: {
      key: '34705219-9da54ac0294187b037daf6e50',
      q: searchQuery,
      image_type: 'photo',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  });
  return response;
};

const api = {
  fetchImagesWithQuery,
};

export default api;
