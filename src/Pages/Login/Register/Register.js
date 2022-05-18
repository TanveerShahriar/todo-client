import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-white'>Error: {error?.message}</p>
    }

    if (user) {
        navigate("/", { replace: true });
    }

    const handleRegister = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container bg-danger mx-auto my-5 py-5 rounded login-form'>
            <h2 className='text-white text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input className='btn btn-outline-light mt-2' type="submit" value="Register" />
                {errorElement}
            </Form>
            <p className='fs-4 fw-bold my-3'>Already have an account? <Link to="/login" className='text-white pe-auto text-decoration-none'>Please Login</Link> </p>
        </div>
    );
};

export default Register;