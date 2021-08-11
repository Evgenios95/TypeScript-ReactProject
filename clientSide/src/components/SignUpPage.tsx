import React from 'react';
import { Formik, Form, Field } from 'formik';
import FadeIn from 'react-fade-in';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from "./FooterHeaderCarouselBoxes/Footer";

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = 'Email Field is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value: string) {
  let error;
  if (!value) {
    error = 'Name Field is Required';
  }
  return error;
}

// function validatePassword(value: string) {
//     let error;
//     if (value !== 'admin') {
//         error = 'Try again!';
//     } else if (!value) {
//         error =  "Required";
//     }
//     return error;
// }

const SignUpPage = () => (
    <div>
        <FadeIn>
            <div data-test="" className="row container" style={{marginLeft: '10%', marginTop: '10%', alignItems: 'flex-start'}}>
                <div 
                    data-test="animation" 
                    className="animated fadeInLeft col-md-6  mt-xl-5 mb-5 flex jesty" 
                >
                    <h1 className="h1-responsive font-weight-bold">Sign up right now!</h1>
                    <hr className="" />
                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.
                    </h6>
                    <button data-test="button" type="button" className="btn btn-info">
                        Learn More
                    </button>
                </div>

                <div data-test="animation" className="animated fadeInRight col-md-6 col-xl-5 mb-4">
                        <div data-test="card" id="classic-card" className="card" style={{background: 'rgb(213, 130, 75, 0.8)'}}>
                            <div data-test="card-body" className="card-body">
                                <h2 className="text-center">
                                    <span>Sign Up</span>
                                </h2>
                                <hr className="" />
                                <Formik
                                    initialValues={{
                                        username: '',
                                        email: '',
                                        // password: ''
                                    }}
                                    onSubmit={values => {
                                        console.log(values);
                                        let userName = values.username;
                                        let userEmail = values.email;
                                        console.log(userName);
                                        console.log(userEmail);
                                        axios
                                            .put(`http://localhost:3000/users/${userName}/${userEmail}`)
                                            .then((result) => {
                                                alert(result.data.addNewUser);
                                                window.location.href = '/log_in';
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }}
                                    >
                                    {({ errors, touched, isValidating }) => (
                                        <Form>
                                            <div className="md-form">
                                                <i className="fa fa-userprefix"></i>
                                                <Field name="username" className="form-control selectedColor" validate={validateUsername} />
                                                {errors.username && touched.username && <div style={{color: 'red'}}>{errors.username}</div>}
                                                <label className="text-white">Your name</label>
                                            </div>

                                            <div className="md-form">
                                                <i className="fa fa-userprefix"></i>
                                                <Field name="email" className="form-control selectedColor" validate={validateEmail} />
                                                {errors.email && touched.email && <div style={{color: 'red'}}>{errors.email}</div>}
                                                <label className="text-white">Your email</label>
                                            </div>

                                            {/* <div className="md-form">
                                                <i className="fa fa-userprefix"></i>
                                                <Field name="password" className="form-control" validate={validatePassword} />
                                                {errors.password && touched.password && <div>{errors.password}</div>}
                                                <label>Your password</label>
                                            </div> */}

                                            <div className="text-center mt-4 black-text">
                                                <button data-test="button" type="submit" className="btn Ripple-parent btn-indigo">Sign Up<div data-test="waves" className="Ripple"></div>
                                                </button>
                                                <Link to="/" style={{color: 'white'}}><span data-test="button" className="btn Ripple-parent btn-success">Shopping</span></Link><div data-test="waves" className="Ripple"></div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                    </div>
                </div>
                
            </div>
        </FadeIn>
        <Footer></Footer>
    </div>
);


export default SignUpPage;