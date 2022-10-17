import { Wrapper } from './App.styled';
import { Component } from 'react';
import axios from 'axios';
import Searchbar from 'components/Searchbar';
// import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidMount() {
    this.fatchGallery();
  }

  fatchGallery() {
    const { page } = this.state;
    this.setState({
      loading: true,
    });

    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=${page}&key=29237455-bf508152d1f1c478b8d78d1ad&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(({ data }) =>
        this.setState(({ items }) => {
          return {
            items: [...items, ...data.hits],
          };
        })
      )
      .catch(error => {
        this.setState({
          error,
        });
      })
      .finally(() =>
        this.setState({
          loading: false,
        })
      );

    console.log('fatchGallery');
  }

  handleFormSubmit = items => {
    this.setState({ items });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Wrapper>
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
