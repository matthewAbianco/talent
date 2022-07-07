import React from 'react'
import { useForm } from 'react-hook-form'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    console.log(errors)
    return (
        <div className='login'>
            <div className='title'>
                <h2>Talent Pool</h2>
                <form className='components' onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>
                    <div>
                        <label for='username'><PersonOutlineIcon /></label>
                        <input type='text' id='username' {...register('username', { required: true, message: "Enter your username" })} placeholder="Username" />
                        <p>{errors.username?.message}</p>
                    </div>
                    <div>
                        <label for='password'><LockIcon /></label>
                        <input type='password' id='password' {...register('password', { required: true, message: "Enter your password" })} placeholder="Password" />
                        <p>{errors.password?.message}</p>
                    </div>
                    <button onClick={handleSubmit}>Sign-In</button>
                    <div>
                        <div>
                            <h4>Forgot Password?</h4>
                        </div>
                        <div>
                            <h4>Sign-up</h4>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
