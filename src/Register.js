import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import NavBar from './NavBar';


const Register = () => {
    const [text, setText] = useState({
        entername: '',
    });
    const charAllow = (e) => {
        setText({ inputtex: e.target.value.replace(/[^A-Za-z,.;. ]|^ /g, '') });
    }

    const { register, handleSubmit, formState: { errors }, reset, trigger, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset();
        setText('');
    }
    console.log(errors);
    // password event 
    const password = watch('password');


    return (
        <>
        <NavBar/>
        <div className='container-fluid d-flex align-items-center justify-content-center flex-column '>
            <h1>Register Form  using useForm library</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {onSubmit.button ? (<div className='ui message success '>Signed in Successfully</div>) : (onSubmit(''))} */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className='form-label'>Enter Name</label>
                    <input type="text" className='form-control' id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'
                        value={text.inputtex} name="name" onChange={charAllow} 
                    />

                    {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className='form-label'>Email address</label>
                    <input type="email" className={`form-control ${errors.emailaddress && 'invalid'}`} id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'
                        {...register("emailaddress", {
                            required: 'Enter valid Email',
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'invalid email'
                            }
                        })}
                        onKeyUp={() => {
                            trigger('emailaddress');
                        }}
                    />
                    {errors.emailaddress && (<small className='text-danger'>{errors.emailaddress.message}</small>)}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className='form-label'>Password</label>
                    <input type="password" className={`form-control ${errors.password && 'invalid'}`} id="exampleInputPassword1"
                        {...register("password", {
                            required: 'Enter valid Password',
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,}$/,
                                message: 'Minimum eight characters, at least one letter, one number and one special character:',
                            },
                        })}
                        onKeyUp={() => {
                            trigger('password');
                        }}
                    />
                    {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className='form-label'>Confirm Password</label>
                    <input type="password" className={`form-control ${errors.confirmpassword && 'invalid'}`} id="exampleInputPassword1"
                        {...register("confirmpassword", {
                            required: 'Enter Confirm Password',
                            validate: value =>
                                value === password || 'The password do not match',
                        })}
                        onKeyUp={() => {
                            trigger('confirmpassword')
                        }}
                    />
                    {errors.confirmpassword && (<small className='text-danger'>{errors.confirmpassword.message}</small>)}

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        </>
    )
}

export default Register;