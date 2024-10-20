import ImageGallery from './ImageGallery';
import Loader from './Loader';
import SearchBar from './SearchBar';
import { Component } from 'react';

export default class App extends Component {
  state = {
    images: [],
    filter: '',
    hasError: false,
    modalIsOpen: false,
    isLoading: false,
    page: 1,
    per_page: 12,
  };

  handleSearch = e => {
    this.setState({ filter: e.target.value });
  };

  handleLoader = () => {
    this.setState(state => ({ isLoading: !state.isLoading }));
  };

  handleImages = data => {
    this.setState({ images: data.hits });
    console.log(data.hits);
    
    
  };

  

  render() {
    return (
      <>
        <SearchBar
          filter={this.state.filter}
          loading={this.handleLoader}
          onSearch={this.handleSearch}
          retrieveImages={this.handleImages}

        />
        <Loader loading={this.state.isLoading} />
        {this.state.images.length > 0 ? (
          <ImageGallery images={this.state.images} />
        ) : (
          <h1>Use the search bar to find images </h1>
        )}
      </>
    );
  }
}
