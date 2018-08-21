import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>





        <nav className="navbar navbar-expand-lg" style={{ background: '#130a33', color: 'white' }}>
          <a className="navbar-brand" href="#">Connectng Dev</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ marginLeft: '50px' }}>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ marginLeft: "350px" }}>
              <li className="nav-item active">
                <a className="nav-link disabled" href="#">Task <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link to="/all" className="nav-link text-white">User</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Activity</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Members</a>
              </li>
            </ul>
            <ul className="navbar-nav inline-block  mt-2" style={{ marginRight: "5px" }}>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  <button className="btn btn-default btn-circle">
                    <i className="material-icons mb-5">perm_identity</i>
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" style={{ marginRight: "10px" }}>
                  Support</a></li>
              <li className="nav-item">
                <i className="material-icons mt-2" style={{ marginRight: "5px" }}>
                  chat_bubble_outline
               </i>
              </li>
            </ul>


          </div>
        </nav>

      </div>
    )
  }
}





export default Navbar;