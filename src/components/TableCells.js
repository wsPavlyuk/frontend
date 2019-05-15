import React from 'react';

const getDateForForecast = (dateForecast) => {
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

const TableCells = (props) => {
    if (props.list === undefined) {
        return null;
    }

    return props.list.map( item => {
        return (
           <tr key={ item.dt }>
               <td>{ getDateForForecast(item.dt_txt) }</td>
               <td>{ item.main.temp }</td>
               <td>{ item.weather[0].main }</td>
           </tr>
        );
    });
}

export default TableCells;