import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList'

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
      <FruitBasket>
        <Filter handleChange={this.handleFilterChange} fetchFilters={this.fetchFilters} filters={this.state.filters}/>
        <FilteredFruitList fruit={this.state.items} filter={this.state.currentFilter}/>
      </FruitBasket>
    )
  }
}

export default App;
