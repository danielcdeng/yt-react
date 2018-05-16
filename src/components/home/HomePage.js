import React from 'react';
import { Link } from 'react-router'; // imports Link component from react-router

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron jumbotron-fluid"> {/* class from Bootstrap */}
        <h2>YouTiming</h2>
        <hr className="my-4" />
        <p>The stock markets amazing changes from the principles of the <i>Book of Change</i></p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
