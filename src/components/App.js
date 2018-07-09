import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from './header/Header';
import AppTitle from './common/AppTitle';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.primaryMenu = this.primaryMenu.bind(this);
    // this.state = { location: context.location };
  }

  // Mainly for Header:
  getChildContext() {
    return {
      location: this.props.location
    };
  }

  primaryMenu(pathname, loading, locale) {
    if (pathname != '/weather' || false) {
      return(
        <div>
          <AppTitle />
          <Header loading={loading} locale={locale}/>
          <div className="fontSizeSmall colorDeepPink">
            <i>
              {(pathname == '/portfolio') ? 'Note: The language switch is yet to be implemented.' : ''}
            </i>
          </div>
        </div>
      );
    }
  }

  render() {
    const {location, loading, locale} = this.props;
    return(
      <div className="container container-fluid">
        {this.primaryMenu(location.pathname, loading, locale)}
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

function mapStateToProps(store, ownProps) {
  // console.log('App, mapStateToProps:');
  // console.log('  par store = ', store);
  // console.log('  par ownProps = ', ownProps);
  return {
    loading: (store.market.ajax + store.weather.ajax) > 0,
    locale:  store.common.locale
  };
}

export default connect(mapStateToProps)(App);
