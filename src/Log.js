import React from 'react'
import NavBar from './NavBar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

const validationSchema = yup.object({
    name: yup.string().required('Name is Required !'),
    email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid Email !').required('Email is Required !'),
    password: yup.string().matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,}$/, 'Minimum eight characters, at least one letter, one number and one special character !').required('Password is Required !'),
    gender: yup.string().required('Gender is required !')
})
const Log = () => {
    return (
        <>
            <NavBar />
            <div className='container-fluid d-flex align-items-center justify-content-center flex-column '>
                <h3>form using formik and yup library</h3>
                <div>
                    <Formik initialValues={{ name: "", email: "", password: "", gender: "" }} onSubmit={(values) => {
                        console.log(values)
                    }} validationSchema={validationSchema}>
                        
                            <Form>
                                <div className="mb-3">
                                    <label>Name </label>
                                    <Field type="text" name='name' className='form-control' />
                                    <ErrorMessage name='name'  />
                                </div>
                                <div className="mb-3">
                                    <label>Email </label>
                                    <Field type="email" name='email' className='form-control' />
                                    <ErrorMessage name='email' />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <Field type="password" name='password' className='form-control' />
                                   <ErrorMessage name='password' />

                                </div>
                                <div className="mb-3">
                                    <label>Gender :</label>
                                    <div className='d-flex space-between '>
                                        <label>Male</label>
                                        <Field type="radio" name='gender' value='male' className='form-check' />
                                        <label>Female</label>
                                        <Field type="radio" name='gender' value='female' className='form-check' />
                                        <label>Other</label>
                                        <Field type="radio" name='gender' value='other' className='form-check' />
                                    </div>
                                    <ErrorMessage name='gender' />

                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        

                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Log;