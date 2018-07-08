import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      items: []
    }
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items: items }));
  }

  handleFilterChange = event => {
    const newFilter = event.target.value
    this.setState({
      currentFilter: newFilter
    })
  }

  fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

  render(){
    return(
      <div>
        <FruitBasket
        handleFilterChange={this.handleFilterChange}
        appState={this.state}
        handleFetch={this.fetchFilters}
        />
      </div>
    )
  }
}

export default App;
