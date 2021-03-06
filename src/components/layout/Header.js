import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    //   nav.navbar.navbar-expand-sm.navbar-dark.bg-danger.mb-3
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Header.defaultProps = {
//     branding : "default"
// }
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
