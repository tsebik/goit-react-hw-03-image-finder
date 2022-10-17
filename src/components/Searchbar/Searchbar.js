import { Component } from 'react';

class Searchbar extends Component {
  state = {
    galleryImg: '',
  };

  handleChange = e => {
    this.setState({ galleryImg: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.galleryImg.trim() === '') {
      return alert('Вы ничего не ввели!');
    }

    this.props.onSubmit(this.state.galleryImg);
    this.setState({ galleryImg: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="galleryImg"
            value={this.state.galleryImg}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
