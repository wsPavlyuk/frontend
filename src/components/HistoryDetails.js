import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHistoryDetails } from '../actions/history.thunk';

import TableCells from './TableCells';

class HistoryDetails extends React.Component {
  componentDidMount() {
    //  console.log('this.props', this.props.match.params.id)

    this.props.getHistoryDetails(this.props.match.params.id);
  }

  renderTable() {
      if(this.props.details.createdAt !== undefined) {
          return (
            <React.Fragment>
              <h3 style={{textAlign: 'center'}}>{ this.props.details.location.address }</h3>
              <table className="table table-bordered" style={{marginTop: "20px"}}>
                <thead>
                  <tr>
                    <td>Date</td>
                    <td>Temperature (Celsium)</td>
                    <td>Weather condition</td>
                  </tr>
                </thead>
                <tbody>
                    <TableCells list={ this.props.details.weather } />
                </tbody>
              </table>
            </React.Fragment>
          );
      }
  }
  
  render() {
    // console.log(this.props.details.location);
    return (
      <React.Fragment>
            <div>{this.renderTable()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      details: state.historyDetails
    };
  };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        getHistoryDetails
    }, dispatch)
  }

export default connect (mapStateToProps, mapDispatchToProps)(HistoryDetails);