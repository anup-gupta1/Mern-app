import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="Container">
                <b /><br /><br /> <b /><br /><br /> <b /><br />
                <footer class="text-white mt-5 p-4 text-center" style={{ background: '#130a33' }}>
                    Copyright &copy; 2018 Connecting Developers
            </footer>
            </div>
        )
    }
}
export default Footer;