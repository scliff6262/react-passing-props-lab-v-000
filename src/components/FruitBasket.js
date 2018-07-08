import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} fetchFilters={props.handleFetch} filters={props.appState.filters}/>
        <FilteredFruitList
          fruit={props.appState.items}
          filter={props.appState.currentFilter}/>
      </div>
    );
}

export default FruitBasket;
