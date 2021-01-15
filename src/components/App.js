import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

  async onSearchSubmit(e){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query:e
      },
      headers: {
        Authorization: 'Client-ID f8UsSrI-4xYEtCzR4GEILlOptKu5iYxR3J5aRU4uQWU'
      }
    });

    console.log(response.data.results);
  }
  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;