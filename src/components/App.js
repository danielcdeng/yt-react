import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';
import AppTitle from './common/AppTitle';

class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        <AppTitle />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
