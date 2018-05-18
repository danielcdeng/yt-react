import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './header/Header';
import AppTitle from './common/AppTitle';
// import LoadingDots from './common/LoadingDots'

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   location: context.location
    // };
  }

  // Mainly for Header:
  getChildContext() {
    return {
      location: this.props.location
    };
  }

  render() {
    console.log('location.pathname = ', location.pathname);
    return(
      <div className="container-fluid">
        <Header loading={this.props.loading} locale={this.props.locale}/>
        <AppTitle />
        <div className="fontSizeSmall colorDeepPink">
          <i>
            {(location.pathname == "/portfolio")?"Note: The portfolio State Code view, the text switch between enUS and zhTW locales, and the server-side rendering feature are yet to be implemented." : ""}
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
  return {
    loading: state.ajaxCallsInProgress > 0,
    locale: state.locale
  };
}

export default connect(mapStateToProps)(App);
