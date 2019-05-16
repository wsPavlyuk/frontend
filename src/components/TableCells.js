import React from 'react';
import { getDateForForecast } from '../utilities';

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