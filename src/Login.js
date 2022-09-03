import React, { useState } from 'react'
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const initialValues = { email: "eve.holt@reqres.in", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log("hellooo", formValues)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    setFormErrors(validate(formValues));
            let result = await fetch('https://reqres.in/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formValues),
            })
            result = await result.json();
            console.log("result", result)
            let user = result.token
            // console.log("HHH",user)
            user &&  localStorage.setItem("login",user)
            user && history.push("/")      
    };
    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const Regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,}$/;
        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!'
        }
        if (!values.password) {
            errors.password = 'Password is required!';
        } else if(Regex.test(values.password.length)) {
            errors.password = 'Minimum eight characters, at least one letter, one number and one special character';
        }
        return errors;
    }
    return (
        <>
            <NavBar />
            <div className='container-fluid d-flex align-items-center justify-content-center flex-column '>
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className='form-label'>Email</label>
                        <input type="email" name="email" value={formValues.email}
                            className={`form-control ${formErrors.email && 'invalid'}`} onChange={handleChange} />
                    </div>
                    <p className='text-danger'> {formErrors.email} </p>
                    <div className="mb-3">
                        <label className='form-label'>Password</label>
                        <input type="password" name="password" value={formValues.password}
                         className={`form-control ${formErrors.password && 'invalid'}`}  onChange={handleChange} />
                    </div>
                    <p className='text-danger'> {formErrors.password} </p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}

export default Login;