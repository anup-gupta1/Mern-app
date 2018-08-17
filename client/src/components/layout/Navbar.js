import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>





        <nav class="navbar navbar-expand-lg" style={{ background: '#130a33', color: 'white' }}>
          <a class="navbar-brand" href="#">Connectng Dev</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ marginLeft: '50px' }}>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0" style={{ marginLeft: "350px" }}>
              <li class="nav-item active">
                <a class="nav-link disabled" href="#">Task <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Activity</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Members</a>
              </li>
            </ul>
            <ul className="navbar-nav inline-block  mt-2" style={{ marginRight: "5px" }}>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  <button className="btn btn-default btn-circle">
                    <i class="material-icons mb-5">perm_identity</i>
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" style={{ marginRight: "10px" }}>
                  Support</a></li>
              <li className="nav-item">
                <i class="material-icons mt-2" style={{ marginRight: "5px" }}>
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