import { useForm } from 'react-hook-form';
import './CreateAccountContainer.css';

const CreateAccountContainer = () => {

    const { register, watch, handleSubmit } = useForm();

    const createAccountFormData = {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        confirmPassword: String
    }

    // const onSubmit = handleSubmit((data) => setData(JSON.stringify(data)));
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <section className='ca-si-section'>
            <div className='main-container'>
                <form
                    onSubmit={onSubmit}
                    className="create-account-panel ca-si-panel">
                    <div className="create-account-header ca-si-panel-header">
                        <h3 id='header-typography'>Sign up</h3>
                    </div>
                    <div className="break-box"></div>
                    <div id='first-name' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">First name</span>
                        </div>
                        <div className="fill-box-user">
                            <input
                                type="text"
                                className="fill-box-user-input"
                                placeholder='First name'
                                {...register("firstName", {
                                    required: "Please enter a valid first name (English only)."
                                }
                                )} />
                        </div>
                    </div>
                    <div id='last-name' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Last name</span>
                        </div>
                        <div className="fill-box-user">
                            <input
                                type="text"
                                className="fill-box-user-input"
                                placeholder='Last name'
                                {...register("lastName", {
                                    required: "Please enter a valid last name (English only)."
                                })} />
                        </div>
                    </div>
                    <div id='email' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Email</span>
                        </div>
                        <div className="fill-box-user">
                            <input
                                type="text"
                                className="fill-box-user-input"
                                placeholder='Email'
                                {...register("email", {
                                    required: "Please enter a valid email address."
                                })} />
                        </div>
                    </div>
                    <div id='password' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Password</span>
                        </div>
                        <div className="fill-box-user">
                            <input
                                type="text"
                                className="fill-box-user-input"
                                placeholder='Password'
                                {...register("password", {
                                    required: "Please enter a valid password."
                                })} />
                        </div>
                    </div>
                    <div id='confirm-password' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Confirm password</span>
                        </div>
                        <div className="fill-box-user">
                            <input
                                type="text"
                                className="fill-box-user-input"
                                placeholder='Confirm password'
                                {...register("confirmPassword", {
                                    required: "Please enter a valid password.",
                                    validate: (value) => {
                                        if (watch("password") !== value) {
                                            return "Passwords do not match. Please re-enter passwords.";
                                        }
                                    }
                                })} />
                        </div>
                    </div>
                    <div className="agree-box fill-box">
                        <input type="checkbox" className="agree-checkbox" />
                        <span class='agree-text'>I agree to receive updates and promotions about Agoda and its affiliates or business partners via various channels, including WhatsApp. Opt out anytime. Read more in the Privacy Policy.</span>
                    </div>
                    <div className="fill-box">
                        <div className="create-account-button fill-box-button">
                            <button type='submit'>
                                <span className='button-typography'>Sign up</span>
                            </button>
                        </div>
                    </div>
                    <hr className="line" />
                    <div className="fill-box">
                        <div className="already-have-account-button fill-box-button">
                            <button>
                                <span className='button-typography'>Already have an account? Sign in</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CreateAccountContainer;