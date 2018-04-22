import React from 'react';
import CountrySelector from '../components/CountrySelector.js';
import CountryDetail from '../components/CountryDetail.js';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      currentCountry: null
    };
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({countries: data})
    });

    request.send();
  }

  render(){
    return(
      <div>
        <h2>Country Container</h2>
        <CountrySelector
          countries={this.state.countries} />
          <CountryDetail />
        </div>
      );
    }
  }

}

export default CountryContainer;
