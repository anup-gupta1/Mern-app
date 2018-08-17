import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ name,
    placeholder,
    value,
    error,
    type,
    labelname,
    onChange,
    disabled

}) => {
    return (
        <div class="form-group">
            <label htmlFor={name}>{labelname}
                <input
                    type={type}
                    className={classnames("form-control form-control-lg", { 'is-invalid': error })} placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    name={name}
                    disabled={disabled}
                />
            </label>
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
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,

}

TextFieldGroup.defaultProps = {
    type: 'text',
}

export default TextFieldGroup;