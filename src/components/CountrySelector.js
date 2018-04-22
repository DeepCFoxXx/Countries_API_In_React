import React from 'react';

const CountrySelector = (props) => {
  return (
    <select onChange={handleChange} defaultValue="default">
      <option disabled value="default">Select Country</option>
      { options }
    </select>
  )
}

export default CountrySelector;
