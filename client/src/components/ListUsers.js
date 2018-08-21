import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUsers } from '../actions/userAction';
import UserItem from './UserItem';
import EditDelete from './EditDelete';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }
    }
    componentDidMount() {
        this.props.getUsers();
        this.setState({
            users: this.props.users.users
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.users.users) {
            this.setState({
                users: nextProps.users.users
            })
        }
    }

    render() {
        //const { users } = this.props.users;
        const { users } = this.state;
        let userItems;
        if (users === null) {
            <p>No users found</p>
        } else {
            if (users.length > 0) {
                userItems = users.map(user => (

                    <UserItem key={user._id} user={user} />


                ));
            } else {
                userItems = <h4>No users found...</h4>;
            }
        }
        return (
            <div className="container mt-5">
                <div className="container">
                    <h3 className="font-weight-bold user-top" style={{ float: 'left' }}>Users Directory</h3>
                    <Link to="/add" type="button" className="btn btn-primary" style={{ marginLeft: "45%", height: "40px" }} ><span className="fa-stack">
                        <i className="fa fa-circle-thin fa-stack-2x pb-2"></i>
                        <i className="fa fa-plus fa-stack-1x pb-2"></i>
                    </span> Add User </Link>
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
