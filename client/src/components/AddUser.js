import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUser } from '../actions/userAction';
import TextFieldGroup from './common/TextFieldGroup';

class AddUser extends Component {
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


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            contact: this.state.contact
        };
        this.props.addUser(newUser, this.props.history);
    }
    render() {
        const { errors } = this.state;
        console.log(errors);
        return (
            <div className="container mt-5">
                <div class="row">
                    <div class="col-sm-6 p-5" style={{ border: "thin solid black", marginLeft: "20%", background: "#f2f3f4" }}>
                        <h3 class="pb-3" style={{ marginRight: "60%" }}>Add new user</h3>
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
                                            placeholder="enter address"
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
                                            placeholder="enter email"
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
                                            placeholder="enter contact"
                                            name="contact"
                                            value={this.state.contact}
                                            onChange={this.onChange}
                                            error={errors.contact}
                                            labelname="Contact"
                                        />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-lg" style={{ width: '90%', marginRight: '20px' }} value="Add User" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



AddUser.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { addUser })(
    withRouter(AddUser)
);