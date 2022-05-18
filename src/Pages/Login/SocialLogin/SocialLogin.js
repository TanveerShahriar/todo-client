import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-white'>Error: {error?.message}</p>
    }

    if (user) {
        navigate("/", { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
                <p className='mt-2 px-2 text-white fw-bold fs-3'>or</p>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-light d-block mx-auto my-2 google-btn'>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;