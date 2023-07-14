import PropTypes from 'prop-types';
import './style.css';

const Form = (
  {
    // eslint-disable-next-line react/prop-types
    submit,
    // eslint-disable-next-line react/prop-types
    handleFirstNameChange,
    // eslint-disable-next-line react/prop-types
    handleLastNameChange,
    // eslint-disable-next-line react/prop-types
    firstName,
    // eslint-disable-next-line react/prop-types
    lastName
  }
  ) => {

  return (
    <>
      <div>
        <h1 className="form-title">What is Your Name?</h1>
        <form className="container-flex" onSubmit={() => submit && submit(event)}>
          <label htmlFor='firstName'>First Name</label>
          <input
          id='inputFName'
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={() => handleFirstNameChange && handleFirstNameChange(event)}
          required/>
          <label htmlFor='lastName'>Last Name</label>
          <input id='inputLName'
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={() => handleLastNameChange && handleLastNameChange(event)}
          required/>
          <button className='button' type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

Form.PropTypes = {
  submit: PropTypes.func.isRequired,
  handleFirstNameChange: PropTypes.func.isRequired,
  handleLastNameChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default Form
