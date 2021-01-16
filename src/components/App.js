import React from 'react';
import ImageCard from './ImageCard';
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (e) =>{
    const response = await unsplash.get('search/photos',{
      params:{query:e}
    });

    this.setState({images: response.data.results}); // will cause component to re render
  }
  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={ this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;