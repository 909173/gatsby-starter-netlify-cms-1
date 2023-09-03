import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'
import instagram from "../img/social/instagram.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '48px' }} /> */}
              <img
                src="/img/bakeryLicoロゴ.png"
                alt="Kaldi"
                style={{ width: "48px", height: "48px" }}
              />
            </Link>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div
              className="navbar-start has-text-centered"
              style={{ width: "100%" }}
            >
              <Link className="navbar-item" to="/">
                Bakery Lico
              </Link>
              <div style={{ flexGrow: "1" }}></div>
              <Link className="navbar-item" to="/products">
                Licoパン
              </Link>
              <Link className="navbar-item" to="/about">
                営業日
              </Link>
              <Link className="navbar-item" to="/blog">
                ブログ
              </Link>
              <Link className="navbar-item" to="/access">
                アクセス
              </Link>
              <a title="instagram" href="https://instagram.com/bakery_lico/">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: "24px", height: "24px", marginTop: "14px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
