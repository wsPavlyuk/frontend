import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <div className="ui pointing menu">
        <div className="item" style={{width: "50%"}}>
          <div id="ui input focus" style={{width: "100%"}}>
            <input
              id="autocomplete"
              placeholder="Введите название города"
              type="text"
              style={{width: "100%", borderRadius: "4px"}}
            />
          </div>
        </div>
        <div className="right menu">
          <Link to="/history" className="item">
            History
          </Link>
          <Link to="/profile" className="item">
            Your profile
          </Link>
          <Link to="/login" className="item">
            Sign out
          </Link>
        </div>
      </div>
    );
};

export default Navigation;