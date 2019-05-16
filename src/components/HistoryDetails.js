import React from 'react';
import TableCells from './TableCells';

class HistoryDetails extends React.Component {

    renderTable() {
        if(this.props.location.state.details[0].main.temp !== undefined) {
            return (
                <table className="table table-bordered" style={{marginTop: "20px"}}>
                  <thead>
                    <tr>
                      <td>Date</td>
                      <td>Temperature (Celsium)</td>
                      <td>Weather condition</td>
                    </tr>
                  </thead>
                  <tbody>
                      <TableCells list={ this.props.location.state.details } />
                  </tbody>
                </table>
            );
        }
    }

    render() {
        return (
          <React.Fragment>
            <h3 style={{textAlign: 'center'}}>{ this.props.location.state.header }</h3>
            <div>{this.renderTable()}</div>
          </React.Fragment>
        );
    }
}

export default HistoryDetails;