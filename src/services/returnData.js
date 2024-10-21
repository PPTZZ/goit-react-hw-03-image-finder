import axios from 'axios';

const END_POINT = 'https://pixabay.com/api/',
  KEY = '45639968-4ab0c3e34d3afa9a12b28af2f';

const getData = async (query, page, per_page) => {
  try {
    const response = await axios.get(
      `${END_POINT}?key=${KEY}&q=${query}&safesearch=true&page=${page}&per_page=${per_page}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

const images = { getData };

export default images;
