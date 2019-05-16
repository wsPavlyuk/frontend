import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveHistory } from '../actions/history.thunk';
import Autocomplete from 'react-google-autocomplete';

import Table from './Table';

class DisplayWeather extends React.Component {
  getLngLat(place) {
    // console.log(place);
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    this.setState({ city: place.formatted_address });
    this.getWeather(
      place.geometry.location.lat(),
      place.geometry.location.lng(),
      place.formatted_address
    );
  }

  getWeather(latitude, longitude, city) {
    var xhr = new XMLHttpRequest();
    var lat = latitude;
    var lng = longitude;
    var APIKey = "099715979800997fed902c8c415868c1";
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=${APIKey}&units=metric`;
    xhr.open("GET", url, false);
    xhr.send();
    var data = JSON.parse(xhr.responseText);
    // console.log(data);
    this.props.saveHistory({
      createdAt: new Date(),
      location: { address: city, latitude, longitude },
      weather: data.list,
    });
  }

  showTable() {
    if (this.props.weatherData.location !== undefined) {
      return (
        <Table
          weather={this.props.weatherData.weather}
          header={this.props.weatherData.location.address}
        />
      );
    }
  }

  render() {
    // console.log(this.props.weatherData.weather);
    return (
      <React.Fragment>
        <Autocomplete
          style={{ width: "100%", borderRadius: "4px" }}
          onPlaceSelected={place => this.getLngLat(place)}
          types={["(regions)"]}
        />
        <div>{ this.showTable() }</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    weatherData: state.weather
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    saveHistory
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(DisplayWeather);