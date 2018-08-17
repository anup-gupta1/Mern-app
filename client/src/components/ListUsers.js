import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUsers } from '../actions/userAction';
import UserItem from './UserItem';
import AddUser from './AddUser';
import EditDelete from './EditDelete';





class ListUsers extends Component {
    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
        this.addClick = this.addClick.bind(this);
    }
    componentDidMount() {
        this.props.getUsers();
    }
    componentWillReceiveProps(nextProps) {

    }
    onClick(id) {
        alert(id);
    }
    addClick(e) {
    }
    render() {
        const { users } = this.props.users;

        let userItems;
        if (users === null) {
            <p>No users found</p>
        } else {
            if (users.length > 0) {
                userItems = users.map(user => (

                    <UserItem key={user._id} user={user} onClick={this.onClick.bind(this, user._id)} />


                ));
            } else {
                userItems = <h4>No users found...</h4>;
            }
        }
        return (
            <div className="container mt-5">
                <div className="container">
                    <h3 className="font-weight-bold user-top" style={{ float: 'left' }}>Users Directory</h3>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.addClick} style={{ marginLeft: "45%", height: "40px" }} ><span className="fa-stack">
                        <i className="fa fa-circle-thin fa-stack-2x pb-2"></i>
                        <i className="fa fa-plus fa-stack-1x pb-2"></i>
                    </span> Add User </button>
                </div><br /><br />
                <table className="table">
                    <thead>
                        <tr className="text-muted" style={{ fontWeight: "2px" }}>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userItems}
                    </tbody>
                </table>
                <AddUser />
                <EditDelete />
            </div>
        )
    }
}

ListUsers.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    users: state.users,
    errors: state.errors,
});

export default connect(mapStateToProps, { getUsers })(ListUsers);
