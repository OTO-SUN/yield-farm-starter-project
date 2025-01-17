import React, { Component } from 'react'
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark flex-md-nowrap p-0 shadow ">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={farmer} width="30" height="30" className="d-inline-block align-top text-3xl font-bold underline" alt="" />
          &nbsp; DApp Token Farm
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
