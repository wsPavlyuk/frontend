import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveHistory } from '../actions/history.thunk';
import Autocomplete from 'react-google-autocomplete';

import Table from './Table';

class DisplayWeather extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: {}, city: '', latitude: 0, longitude: 0 };
  }
  
  getHistory(latitude, longitude) {
    var xhr = new XMLHttpRequest();
    var lat = latitude;
    var lng = longitude;
    var APIKey = "099715979800997fed902c8c415868c1";
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=${APIKey}&units=metric`;
    xhr.open("GET", url, false);
    xhr.send();
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    this.setState({ data, latitude: lat, longitude: lng });
    this.props.saveHistory({
      createdAt: new Date(),
      location: { address: this.state.city, latitude: this.state.latitude, longitude: this.state.longitude },
      weather: this.state.data.list
    });
  }

  render() {
    return (
      <React.Fragment>
        <Autocomplete
          style={{ width: "100%", borderRadius: "4px" }}
          onPlaceSelected={place => {
            console.log(place);
            if (!place.geometry) {
              window.alert(
                "No details available for input: '" +
                  place.name +
                  "'"
              );
              this.setState({ data: {}, latitude: '', longitude: '' });
              return;
            }
            this.setState({ city: place.formatted_address});
            this.getHistory(
              place.geometry.location.lat(),
              place.geometry.location.lng()
            );
          }}
          types={["(regions)"]}
        />
        <Table weather={ this.state.data }/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { 

  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    saveHistory
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(DisplayWeather);