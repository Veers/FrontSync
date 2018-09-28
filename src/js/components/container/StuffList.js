import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';
class StuffList extends React.Component {
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
     this.props.stuffActions.fetchStuff();
   }
  
  renderData() {
    return <div>{this.props.stuffs}</div>;
  }
  
  // {this.props.stuffs.length > 0 ?
  //           this.renderData()
  //           :
  //           <div className="">
  //             No Data
  //           </div>
  //         }


  render() {
    return (
      <div className="">
          NO DATA
      </div>
    );
  }
}
StuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.object
};
function mapStateToProps(state) {
  return {
    stuffs: state.stuffs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StuffList);