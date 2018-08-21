import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteUser } from '../actions/userAction';

class EditDelete extends Component {

    onDeleteClick(id) {
        this.props.deleteUser(id);
    }
    render() {
        const { user } = this.props.users;
        return (
            <div className="dropdown-menu mt-4">
                <Link to={`/edit?id=${user._id}`} styel={{ color: "black" }} > <i className="material-icons pt-2" >
                    edit
                    </i>&nbsp;Edit User Details</Link>
                <div onClick={this.onDeleteClick.bind(this, user._id)} style={{ background: "white" }}><i className="material-icons" style={{ color: 'red' }}>
                    delete_sweep
             </i>&nbsp;Delete User</div>
            </div>

        )
    }
}




EditDelete.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, { deleteUser })(EditDelete);