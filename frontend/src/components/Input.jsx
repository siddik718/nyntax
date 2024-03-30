import PropTypes from 'prop-types';

const Input = ({ label, type, name, placeholder, value, onChange, required, readOnly }) => {
    return (
        <div className=''>
            <label htmlFor="id">
                {label}
            </label>
            <input
                id="id"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                readOnly={readOnly}
                className='border border-blue-300 rounded p-1 w-full'  />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    label: '',
    type: 'text',
    name: '',
    placeholder: '',
    value: '',
    onChange: ()=>{console.log('nothing giben...')},
    required: false,
    readOnly: false,
};


export default Input;