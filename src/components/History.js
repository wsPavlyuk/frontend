import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHistory } from '../actions/history.thunk';
import HistoryList from './HistoryList';

class History extends React.Component {

    componentDidMount() {
        // console.log('GETTING HISTORY')
        this.props.getHistory();
    }

    render() {
       return (
           <ol>
               <HistoryList history={ this.props.histories }/>
           </ol>
       );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.historyList);
    return {
        histories: state.historyList
    };
  };
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
    getHistory
    }, dispatch)
  }
  
export default connect (mapStateToProps, mapDispatchToProps)(History);