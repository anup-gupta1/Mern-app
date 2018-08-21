import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ name,
    placeholder,
    value,
    error,
    type,
    labelname,
    onChange

}) => {
    return (
        <div class="form-group">
            <label htmlFor={name} style={{ marginRight: "200px" }}>{labelname}</label>
            <input
                type={type}
                className={classnames("form-control ", { 'is-invalid': error })} placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
            />
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    );
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    labelname: PropTypes.string,
    onChange: PropTypes.func.isRequired

}

TextFieldGroup.defaultProps = {
    type: 'text',
}

export default TextFieldGroup;