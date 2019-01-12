import React, { Component } from "react";
import unsplash from "./components/unsplash";
import SearchBar from "./components/SearchBar";

import ImageList from "./components/ImageList";
class App extends Component {
  state = {
    images: []
  };

  onSearchSumbit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar SearchSumbit={this.onSearchSumbit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
