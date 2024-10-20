import { AppBar, InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar = ({ filter, onSearch, page, retrieveImages, loading }) => {
  const END_POINT = 'https://pixabay.com/api/';
  const KEY = '45639968-4ab0c3e34d3afa9a12b28af2f';


  const getData = async (filter) => {
    try {        
        console.log(filter);
        
      loading();
      const response = await axios.get(
        `${END_POINT}?key=${KEY}&q=&safesearch=true&page=${page}`
      );
      retrieveImages(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      loading();
    }
  };

  const handleSearch = e => {
    if (e.key != 'Enter') {
      return;
    }
    onSearch(e);
    getData(filter);
  };

  return (
    <AppBar
      position='static'
      sx={{ height: 70, alignItems: 'center', justifyContent: 'center' }}>
      <TextField
        onKeyDown={handleSearch}
        variant='outlined'
        placeholder='Search'
        sx={{
          width: 250,
          '& .MuiOutlinedInput-root': {
            color: 'text.primary',
            backgroundColor: '#fff',
            fontWeight: 'bold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2e2e2e',
              borderWidth: '2px',
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </AppBar>
  );
};

SearchBar.propTypes = {
  filter: PropTypes.string,
  onSearch: PropTypes.func,
  page: PropTypes.number,
  retrieveImages: PropTypes.func,
  loading: PropTypes.func,
};
export default SearchBar;
