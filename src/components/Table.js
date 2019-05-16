import React from 'react';
import TableCells from './TableCells';

class Table extends React.Component {
  
  renderTable() {
    return (
      <React.Fragment>
        {/* <h3>{this.props.header}</h3> */}
        <table
          className="table table-bordered"
          style={{ marginTop: "20px" }}
        >
          <thead>
            <tr>
              <td>Date</td>
              <td>Temperature (Celsium)</td>
              <td>Weather condition</td>
            </tr>
          </thead>
          <tbody>
            <TableCells list={this.props.weather} />
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  render() {
    return <div>{this.renderTable()}</div>;
  }
}

export default Table;