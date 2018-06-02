import React, {PropTypes} from 'react';
import { Link } from 'react-router'; // imports Link component from react-router

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    //console.log('path: ', context.location.pathname);
  }

  render() {
    return(
      <div className="jumbotron jumbotron-fluid"> {/* class from Bootstrap */}
        <h2>YouTiming</h2>
        <hr/>
        <p>The stock markets amazing changes from the principles of <i>I-Ching</i></p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

HomePage.contextTypes = {
  location: PropTypes.object
};

export default HomePage;
