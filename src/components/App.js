import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from './header/Header';
import AppTitle from './common/AppTitle';
// import LoadingDots from './common/LoadingDots'

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    // this.state = { location: context.location };
  }

  // Mainly for Header:
  getChildContext() {
    return {
      location: this.props.location
    };
  }

  render() {
    //console.log('location.pathname = ', location.pathname);
    return(
      <div className="container-fluid">
        <Header loading={this.props.loading} locale={this.props.locale}/>
        <AppTitle />
        <div className="fontSizeSmall colorDeepPink">
          <i>
            {(location.pathname == "/portfolio")?"Note: The language switch and the ticker column State view are yet to be implemented." : ""}
          </i>
        </div>
        {/*{this.props.loading && <LoadingDots interval={30} dots={25}/>}*/}
        {this.props.children}
      </div>
    );
  }
}

// Mainly for Header:
App.childContextTypes = {
  location: PropTypes.object
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading:  PropTypes.bool,
  locale:   PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log('App, mapStateToProps:');
  console.log('  par state = ', state);
  console.log('  par ownProps = ', ownProps);
  return {
    loading: state.data.ajax > 0,
    locale:  state.data.locale
  };
}

export default connect(mapStateToProps)(App);
