import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputClick() {}

  onFormSumbit = event => {
    event.preventDefault();

    this.props.SearchSumbit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSumbit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
        {this.state.term}
      </div>
    );
  }
}
export default SearchBar;
