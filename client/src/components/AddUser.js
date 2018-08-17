import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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





    onClick(e) {

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
        return (
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add new User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onClick.bind(this)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
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
                                                placeholder="Name"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.onChange}
                                                error={errors.name}
                                                label-name="User Name"
                                            />
                                            <TextFieldGroup
                                                placeholder="Address"
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.onChange}
                                                error={errors.address}
                                                label-name="Address"
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
                                                label-name="Email"
                                            />
                                        </div>
                                        <div class="col-sm-6">
                                            <TextFieldGroup
                                                placeholder="Contact"
                                                name="contact"
                                                value={this.state.contact}
                                                onChange={this.onChange}
                                                error={errors.contact}
                                                label-name="Contact"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-primary btn-lg" style={{ width: '90%', marginRight: '20px' }} value="Add User" />
                            </form>
                        </div>
                        <div className="modal-footer">

                        </div>
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