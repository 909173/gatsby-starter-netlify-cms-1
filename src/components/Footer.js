import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src="/img/bakeryLicoロゴ.png" style={{ width: '14em', height: '14em' }} />
          {/* <img src={logo} alt="Kaldi" style={{ width: '14em', height: '10em' }} /> */}
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Info
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    {/* <li>
                      <a className="navbar-item" href="/admin/" target="_blank" rel="noopener noreferrer">
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/kana.shinomiya.3">
                  <img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
                </a>
                {/* <a title="twitter" href="https://twitter.com">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
                </a> */}
                <a title="instagram" href="https://www.instagram.com/bakerylico/">
                  <img src={instagram} alt="Instagram" style={{ width: '1em', height: '1em' }} />
                </a>
                {/* <a title="vimeo" href="https://vimeo.com">
                  <img src={vimeo} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
                </a> */}
              </div>
              <div className="column is-4">
                <img src="/img/地図2.png" style={{ width: '16em' }} />

                {/* <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
