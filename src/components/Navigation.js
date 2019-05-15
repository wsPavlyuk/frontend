import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

  render () {
    return (
      <div className="ui four item menu">
          <Link to="/weather" className="item">
            Weather
          </Link>
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
    );
  }
};

export default Navigation;