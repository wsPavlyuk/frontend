import React from 'react';
import TableCells from './TableCells';

class Table extends React.Component {

    renderTable() {
        if(this.props.weather.list !== undefined) {
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
                      <TableCells list={ this.props.weather.list } />
                  </tbody>
                </table>
            );
        }
    }
    
    render() {
        return <div>{ this.renderTable() }</div>
    }
}

export default Table;