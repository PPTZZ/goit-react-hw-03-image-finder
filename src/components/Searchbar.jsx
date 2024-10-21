import { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, InputAdornment, TextField } from '@mui/material';

export default class SearchBar extends Component {
  state = {
    searchWord: '',
  };

  handleKeydown=(e)=> {
    if(e.code !== 'Enter'){
      return
    }
    const inputData = e.target.value;
    this.setState({searchWord:inputData})
    console.log(this.state.searchWord);
  }

  componentDidUpdate(){
    console.log('update');
    
  }

  render() {
    return (
      <AppBar
        position='static'
        sx={{ height: 70, alignItems: 'center', justifyContent: 'center' }}>
        <TextField
          onKeyDown={this.handleKeydown}
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
  }
}

SearchBar.propTypes = {
  filter: PropTypes.string,
  onSearch: PropTypes.func,
  page: PropTypes.number,
  retrieveImages: PropTypes.func,
  onLoader: PropTypes.func,
};
