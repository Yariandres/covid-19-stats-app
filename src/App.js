import React, { Component } from "react";
import Totalstats from "./components/world-stats/world-stats.component";
import TableData from "./components/table-data/table-data.component";
import SearchBox from "./components/search-box/search-box.component";
import CoffeeButton from "./components/coffee-button/coffee-button.component";

import axios from 'axios';

import "./App.css";


class App extends Component {
  state = {
    worldStats: [],
    countries: [],
    searchField: '',
    name: '',
    sortDirection: {
      death_num: "asc",
    }
  } 

  componentDidMount() {
    axios.get('https://corona.lmao.ninja/all')
    .then(res => {
      const worldStats = res.data;
      this.setState ({ worldStats });
    });

    axios.get(`https://corona.lmao.ninja/countries`)
    .then(res => {
      const countries = res.data;
      this.setState ({ countries });
    });
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  }

  sortBy = key => {
    this.setState({
      countries: this.state.countries.sort( (a, b) => (
        this.state.sortDirection[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
        )),
        sortDirection: {
         [key]: this.state.sortDirection[key] === "asc"
          ? 'desc'
          : "asc"
        }
    });
  }

  render() {

    const { countries, searchField } = this.state;
    const filterCountries = countries.filter(name => name.country.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="main">
        

        <div className="container-fluid">       
        <CoffeeButton/>
          <div className="row"> 
            <div className="col-md-6">
              <Totalstats stats={ this.state.worldStats }/>
            </div>
            <div className="col-md-6">

              <SearchBox 
                placeholder="Search a country..."
                handleChange={ this.handleChange } 
              />
              <small>Sort by : asc or desc order</small>
              <TableData 
                info={ filterCountries } 
                sortBy={ this.sortBy }
              />
            </div>   
          </div>        
        </div>
      </div>
    );
  }
}

export default App;
