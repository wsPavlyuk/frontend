import React from 'react';
import { Link } from 'react-router-dom';


const HistoryList = (props) => {
    // console.log(Object.values(props.history));
    return Object.values(props.history).map( item => {

        return (
          <li key={item.createdAt}>
            <Link to={{ pathname: `/history/${item.userId}` }}>
              Requested {item.location.address} by user with id: {item.userId} at { item.createdAt }
            </Link>
          </li>
        );
    });
}

export default HistoryList;