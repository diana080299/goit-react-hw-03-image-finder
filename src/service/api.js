import axios from 'axios';
import { toast } from 'react-toastify';
//pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const API_KEY = '39883677-dc5443fbaa150eb4249f0b8c0';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  try {
    const response = await axios.get('/', {
      params: {
        q: query,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    toast.error('Error getting images:', error);
    throw error;
  }
};

// const API_KEY = '39876586-8a2f0cc49d6159d0bf3e975f6';
// const URL = 'https://pixabay.com/api/';

// export async function getImages(query, page) {
//   const params = new URLSearchParams({
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
//   });

//   try {
//     const response = await axios.get(
//       `${URL}?key=${API_KEY}&q=${query}&${params}&page=${page}`
//     );

//     if (response.data.hits.length === 0) {
//       toast.error(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );

//       return;
//     }

//     return response.data;
//   } catch (error) {
//     toast.error(error.message);
//   }
// }
