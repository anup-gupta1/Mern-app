import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../actions/userAction';
import { addUser } from '../actions/userAction';
import { updateUser } from '../actions/userAction';
import TextFieldGroup from './common/TextFieldGroup';
import queryString from 'query-string';
import isEmpty from '../validation/is-empty';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            contact: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        this.props.getCurrentUser(qs.id);
    }


    componentWillReceiveProps(nextProps) {
        console.log("from next props");
        console.log(nextProps.users);
        console.log(nextProps.errors);
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        if (nextProps.user) {
            const user = nextProps.user;
            user.name = !isEmpty(user.name) ? user.name : '';
            user.email = !isEmpty(user.email) ? user.email : '';
            user.address = !isEmpty(user.address) ? user.address : '';
            user.contact = !isEmpty(user.contact) ? user.contact : '';
            this.setState({
                name: user.name,
                email: user.email,
                address: user.address,
                contact: user.contact
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const qs = queryString.parse(this.props.location.search);
        const currentUser = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            contact: this.state.contact
        };
        const id = qs.id;
        this.props.updateUser(currentUser, id, this.props.history);
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div class="row">
                    <div class="col-sm-6 p-5 mt-5" style={{ border: "thin solid black", marginLeft: "20%", background: "#f2f3f4" }}>
                        <h3 class="pb-3" style={{ marginRight: "65%" }}>Edit User</h3>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="mt-4" style={{ border: "thin solid #b1b2a2", height: "75%" }}>
                                            <label class="custom-file">
                                                <input type="file" id="file" class="custom-file-input" />
                                                <div class="col-sm-1">
                                                    <span class="glyphicon glyphicon-user"></span>
                                                </div>

                                                <span class="custom-file-control"></span>
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <TextFieldGroup
                                            placeholder="enter full name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                            labelname="User Name"
                                        />
                                        <TextFieldGroup
                                            placeholder="Address"
                                            name="address"
                                            value={this.state.address}
                                            onChange={this.onChange}
                                            error={errors.address}
                                            labelname="Address"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <TextFieldGroup
                                            placeholder="Email"
                                            name="email"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            error={errors.email}
                                            labelname="Email"
                                        />
                                    </div>
                                    <div class="col-sm-6">
                                        <TextFieldGroup
                                            placeholder="Contact"
                                            name="contact"
                                            value={this.state.contact}
                                            onChange={this.onChange}
                                            error={errors.contact}
                                            labelname="Contact"
                                        />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-lg" style={{ width: '90%', marginRight: '20px' }} value="Save Changes" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



EditUser.propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.users.user,
    errors: state.errors
});

export default connect(mapStateToProps, { getCurrentUser, updateUser })(withRouter(EditUser));