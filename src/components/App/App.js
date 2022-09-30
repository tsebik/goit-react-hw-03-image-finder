import { Wrapper } from './App.styled';
import { Component } from 'react';
import axios from 'axios';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

const DEFAULT_PAGE = 1;
const per_page = 12;

let page = DEFAULT_PAGE;

// const resetPage = () => {
//   page = DEFAULT_PAGE;
// };

class App extends Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const searchParams = new URLSearchParams({
      key: '29237455-bf508152d1f1c478b8d78d1ad',
      q: 'cat',
      per_page,
      page,
      id: 1,
      orientation: 'horizontal',
    });

    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?${searchParams}&image_type=photo&orientation=horizontal`
      );
      console.log(data);
      this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Searchbar />
        <Wrapper>
          <ImageGallery />
          <ImageGalleryItem />
        </Wrapper>
        <Button />
        <Loader />
        <Modal />
      </>
    );
  }
}

export default App;
