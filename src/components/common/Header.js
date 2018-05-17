import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

// JSX property "activeClassName" means to apply CSS class "active" when the link is selected/activated by user.
const Header = ({loading}) => {
  console.log('loading = ', {loading});
  return(
    <nav className="fontSize16px">
      <IndexLink to="/"     activeClassName="active">Home</IndexLink>{" | "}
      <Link to="/portfolio" activeClassName="active">Portfolio</Link>{" | "}
      <Link to="/about"     activeClassName="active">About</Link>
      &nbsp;&nbsp;
      {loading && <LoadingDots interval={100} dots={20}/>} {/* Show a dot every 100 ms, up to a max 20 dots */}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;
