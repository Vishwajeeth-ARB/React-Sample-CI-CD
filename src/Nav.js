import { React, Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navdivStyle">
        <nav className="navStyle">
          <ul className="ulStyle">
            <Link to="Product">
              <li>Product</li>
            </Link>
            <Link to="About">
              <li>About</li>
            </Link>
            <Link to="Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
