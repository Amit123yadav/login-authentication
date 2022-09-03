import React from 'react'
import NavBar from './NavBar';
import { Formik,Form,Field } from 'formik';



function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is Required !';
    } 
    return error;
  }

function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email is Required !';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address !';
    }
    return error;
  }

  function validatePass(value) {
    let error;
    if (!value) {
      error = 'Password is Required !';
    } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,}$/.test(value)) {
      error = 'Minimum eight characters, at least one letter, one number and one special character !';
    }
    return error;
  }
  function validateCheck(value) {
    let error;
    if (!value) {
      error = 'Please select Gender First !';
    } 
    return error;
  }

const Reg = () => {
    return (
        <>
            <NavBar />
            <div className='container-fluid d-flex align-items-center justify-content-center flex-column '>
                <h1>Register form using formik library</h1>
                <div>
                <Formik initialValues={{name: "",email: "",password: "",gender: ""}} onSubmit={(values)=>{
                    console.log(values)
                }}>
                     {({ errors, touched }) => (
                <Form>
                <div className="mb-3">
                        <label>Name </label>
                        <Field type="text" name='name' validate={validateName}  className={`form-control ${errors.name && 'invalid'}`}/>
                        {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label>Email </label>
                        <Field type="email" name='email' validate={validateEmail} className={`form-control ${errors.email && 'invalid'}`}/>
                        {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <Field type="password" name='password' validate={validatePass} className={`form-control ${errors.password && 'invalid'}`}/>
                        {errors.password && touched.password && <div className='text-danger'>{errors.password}</div>}
                    </div>
                    <div className="mb-3">
                        <label>Gender :</label>
                        <div className='d-flex space-between '>
                        <label>Male</label>
                        <Field type="radio" name='gender' validate={validateCheck}  value='male' className='form-check'/>
                        <label>Female</label>
                        <Field type="radio" name='gender' validate={validateCheck} value='female' className='form-check'/>
                        <label>Other</label>
                        <Field type="radio" name='gender' validate={validateCheck} value='other' className='form-check'/>
                        </div>
                        {errors.gender && touched.gender && <div className='text-danger'>{errors.gender}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
                   )}
                </Formik>
                </div>
            </div>
        </>
    )
}

export default Reg;