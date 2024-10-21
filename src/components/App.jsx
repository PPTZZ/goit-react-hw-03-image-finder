import images from '../services/returnData';
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

  handleLoader(){
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  async getImages() {
    try {
      this.handleLoader();
      const response = await images.getData();
      console.log(response.data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      this.handleLoader();
    }
  }
  async componentDidMount() {
    this.getImages();
  }
  render() {
    return (
      <>
        <SearchBar
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
