import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteUser } from '../actions/userAction';

class EditDelete extends Component {
    constructor(props) {
        super(props);
    }
    onEditClick(id) {

    }
    onDeleteClick(id) {
        this.props.deleteUser(id);
    }
    render() {

        const { errors } = this.props;
        const { user } = this.props.users;
        return (
            <div class="modal  bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-sm" style={{ position: "absolute", top: "40%", left: "80%" }}>
                    <div class="modal-content" >
                        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#exampleModalCenter"><i class="material-icons" onClick={this.onEditClick.bind(this, user._id)}>
                            edit
                    </i>Edit User</button>
                        <button type="button" onClick={this.onDeleteClick.bind(this, user._id)}><i class="material-icons" style={{ color: 'red' }}>
                            delete_sweep
</i>Delete User</button>
                    </div>
                </div>
            </div>
        )
    }
}




EditDelete.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    users: state.users,
    errors: state.errors
});

export default connect(mapStateToProps, { deleteUser })(EditDelete);