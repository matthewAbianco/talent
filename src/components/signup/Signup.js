import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PasswordInputField from '../../Helpers/password/PasswordInputField'
import ConfirmPasswordInputField from '../../Helpers/password/ConfirmPasswordInputField'


const Signup = () => {

    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput] = useState({
        password: '',
        confirmPassword: ''
    })

    const handlePasswordChange = (event) => {

        const passwordInputValue = event.target.value.trim();
        const passwordInputFieldName = event.target.name;
        const NewPasswordInput = { ...passwordInput, [passwordInputFieldName]: passwordInputValue }
        setPasswordInput(NewPasswordInput);

    }
    const handleValidation = (event) => {

        const passwordInputValue = event.target.value.trim();
        const passwordInputFieldName = event.target.name;

        //for password 
        if (passwordInputFieldName === 'password') {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;

            const passwordLength = passwordInputValue.length;
            const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
            const digitsPassword = digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword = minLengthRegExp.test(passwordInputValue);

            let errMsg = "";
            if (passwordLength === 0) {
                errMsg = "Password is empty";
            } else if (!uppercasePassword) {
                errMsg = "At least one Uppercase";
            } else if (!lowercasePassword) {
                errMsg = "At least one Lowercase";
            } else if (!digitsPassword) {
                errMsg = "At least one digit";
            } else if (!specialCharPassword) {
                errMsg = "At least one Special Characters";
            } else if (!minLengthPassword) {
                errMsg = "At least minumum 8 characters";
            } else {
                errMsg = "";
            }
            setPasswordErr(errMsg);
        }

        // for confirm password
        if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)) {

            if (passwordInput.confirmPassword !== passwordInput.password) {
                setConfirmPasswordError("Confirm password is not matched");
            } else {
                setConfirmPasswordError("");
            }

        }

    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    console.log(errors)

    return (
        <div className='signup'>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <div className='firstName'>
                    <input type="text"
                        id="firstName"
                        {...register(
                            'firstName',
                            {
                                pattern: {
                                    value: /^[A-Za-z]{2,16}$/,
                                    message: "Please enter a valid first name",
                                },
                            })}

                        placeholder="First Name" minLength={2} maxLength={16} />
                    <p>{errors.firstName?.message}</p>
                </div>
                <div className='lastName'>
                    <input
                        {...register(
                            'lastName',
                            {
                                pattern: {
                                    value: /^[A-Za-z]{2,20}$/,
                                    message: "Please enter a valid last name"
                                },
                            })}
                        placeholder="Last Name" minLength={2} maxLength={20} />
                    <p>{errors.lastName?.message}</p>
                </div>

                <div className='phoneNumber'>
                    <input
                        id="phoneNumber"
                        {...register(
                            'phoneNumber',
                            {
                                pattern: {
                                    value: /^\d{3}\s\d{3}\s\d{4}$/,
                                    message: "please enter a valid phone number"
                                }
                            })}
                        placeholder='Phone Number' maxLength={12} />
                    <p>{errors.phoneNumber?.message}</p>
                </div>

                <div className='email'>
                    <input
                        {...register(
                            "email",
                            {
                                required: true,
                                pattern: {
                                    value: /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+)\.([a-z.]{2,6})$/,
                                    message: "Please enter a valid email"
                                }
                            })}
                        placeholder="Email" />
                    <p>{errors.email?.message}</p>
                </div>

                <div className='password'>
                    <PasswordInputField
                        handlePasswordChange={handlePasswordChange}
                        handleValidation={handleValidation}
                        passwordValue={passwordInput.password}
                        passwordError={passwordError} />
                </div>

                <div className='password_confirm'>
                    <ConfirmPasswordInputField
                        handlePasswordChange={handlePasswordChange}
                        handleValidation={handleValidation}
                        confirmPasswordValue={passwordInput.confirmPassword}
                        confirmPasswordError={confirmPasswordError} />
                </div>

                <div className='talent_select'>
                    <select
                        {...register('profession',
                            {
                                required: true,
                                message: 'Please select your occupation'
                            })} placeholder="Occupation" >
                        <option value="photographer">Photographer</option>
                        <option value="videographer">Videographer</option>
                        <option value="videoEditor">Video Editor</option>
                        <option value="photoEditing">Photo Editing</option>
                        <option value="PhotographyTeacher">Photography Teacher</option>
                        <option value="videographyTeacher">Videography Teacher</option>
                        <option value="client">Client</option>
                    </select>
                </div>

                <div className='creditCard'>
                    <select
                        {...register(
                            'creditCard',
                            {
                                required: true,
                                message: 'Missing credit card information'
                            })} placeholder="credit Card"
                    >
                        <option value='visa'>Visa</option>
                        <option value='masterCard'>Master Card</option>
                        <option value='americanExpress'>American Express</option>
                        <option value='discovery'>Discovery</option>
                    </select>
                </div>

                <div className='city'>

                    <input
                        {...register(
                            'city',
                            {
                                required: true,
                                message: 'Please enter the city you are from'
                            })} />
                    <p>{errors.city?.message}</p>
                </div>

                <div className='about'>
                    <textarea id='about'{
                        ...register(
                            'about',
                            {
                                required: true,
                                message: "Tell peope about yourself"
                            })}
                        placeholder='Tell people about yourself.' rows='4' cols='40' maxLength={500} ></textarea>
                    <p>{errors.about?.message}</p>
                </div>

                <div className='Photo of client'>
                    <label></label>
                    <button>Upload Photo</button>
                </div>

                <div className='media upload'>
                    <h4>Upload Photos and videos of your work</h4>
                    <button>Upload Media</button>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Signup