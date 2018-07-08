import React from 'react';

const FilteredFruitList = (props) => {
    const selectedFilter = props.filter
    const items = props.fruit
    const list = !selectedFilter || selectedFilter === 'all' ? items : items.filter(i => i.fruit_type === selectedFilter);
    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );

  }


  FilteredFruitList.defaultProps = {
    fruit: null,
    filter: null
  }


export default FilteredFruitList;
