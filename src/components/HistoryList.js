import React from 'react';
import { Link } from 'react-router-dom';
import { getDateForForecast } from '../utilities';


const HistoryList = (props) => {
    // // console.log(Object.values(props.history));
    return Object.values(props.history).map( item => {

        return (
          <li key={item.createdAt}>
            <Link to={{ pathname: `/history/${item._id}` }}>
              {item.location.address} requested { getDateForForecast(item.createdAt) }
            </Link>
          </li>
        );
    });
}

export default HistoryList;