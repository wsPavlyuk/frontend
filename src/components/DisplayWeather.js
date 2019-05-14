import React from 'react';
import $ from 'jquery';

import Navigation from './Navigation';

class DisplayWeather extends React.Component {

  componentDidMount() {

    var tbody = $("tbody"),
        thead = $("thead");

    const google = window.google;

    makeInvisible();

    var autocomplete = new google.maps.places.Autocomplete(
      $("#autocomplete")[0],
      { types: ["geocode"] }
    );

    autocomplete.addListener("place_changed", function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        tbody.empty();
        makeInvisible();
        window.alert("No details available for input: '" + place.name + "'");
        return;
      } else {
        var lat = place.geometry.location.lat();
        var lon = place.geometry.location.lng();
        var APIKey = "099715979800997fed902c8c415868c1";
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APIKey}`;

        $.getJSON(url, function makeTab(data) {
          tbody.empty();
          $.each(data.list, function(index, element) {
            tbody.append('<tr id="' + index + '"></td>');
            $("#" + index).append(
              `<td>${getDateForForecast(element.dt_txt)}</td>`
            );
            $("#" + index).append(
              `<td>${(element.main.temp - 273.15).toFixed(1)}</td>`
            );
            $("#" + index).append(`<td>${element.weather[0].main}</td>`);

            function getDateForForecast(dateForecast) {
              dateForecast = dateForecast.split(" ");
              let dateDMY = dateForecast[0]
                .split("-")
                .reverse()
                .join(".");
              let time = dateForecast[1]
                .split(":")
                .splice(0, 2)
                .join(":");
              return `${dateDMY} ${time}`;
            }
          });
          makeInvisible();
        });
      }
    });

    function makeInvisible() {
      if (tbody.children().length === 0) {
        thead.addClass("invisible");
      } else {
        thead.removeClass("invisible");
      }
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <table className="table table-bordered">
          <thead>
            <tr>
              <td className="small">Date</td>
              <td>Temperature (Celsium)</td>
              <td>Weather condition</td>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

export default DisplayWeather;