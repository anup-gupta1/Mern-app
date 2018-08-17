import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../actions/userAction';

class UserItem extends Component {
    onUserClick(id) {
        this.props.getCurrentUser(id);
    }
    render() {
        const { user } = this.props;

        return (
            <tr onClick={this.onUserClick.bind(this, user._id)}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td style={{ fontWeight: "50px" }}><button type="button" class="btn btn-default" style={{ background: 'white' }} data-toggle="modal" data-target=".bd-example-modal-sm">...</button></td>
            </tr>
        )
    }
}


UserItem.propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    users: state.users,
    errors: state.errors
});

export default connect(mapStateToProps, { getCurrentUser })(UserItem);

