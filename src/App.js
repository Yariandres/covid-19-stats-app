import React, { Component } from "react";
import Totalstats from "./components/world-stats/world-stats.component";
import TableData from "./components/table-data/table-data.component";
import SearchBox from "./components/search-box/search-box.component";

import axios from 'axios';

import "./App.css";


class App extends Component {
  state = {
    worldStats: [],
    countries: [],
    searchField: '',
    name: ''
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

  render() {

    // const {countries, searchField} = this.state;

    return (
      <div className="main">
        <div className="container">
        

          <div className="row"> 
            <div className="col-md-6">
              <Totalstats stats={ this.state.worldStats }/>
            </div>
            <div className="col-md-6">
              <SearchBox placeholder="Search for a country..."/>
              <TableData info={ this.state.countries }/>
            </div>   
          </div>        
        </div>
      </div>
    );
  }
}

export default App;
