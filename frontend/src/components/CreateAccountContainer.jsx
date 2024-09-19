import './CreateAccountContainer.css';

const CreateAccountContainer = () => {
    return (
        <section id='create-account'>
            <div className='main-container'>
                <div className="create-account-panel">
                    <div className="create-account-header">
                        <h3 id='header-typography'>Sign up</h3>
                    </div>
                    <div className="break-box"></div>
                    <div id='first-name' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">First name</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='First name' />
                        </div>
                    </div>
                    <div id='last-name' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Last name</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Last name' />
                        </div>
                    </div>
                    <div id='email' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Email</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Email' />
                        </div>
                    </div>
                    <div id='password' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Password</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Password' />
                        </div>
                    </div>
                    <div id='confirm-password' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Confirm password</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Confirm password' />
                        </div>
                    </div>
                    <div className="agree-box fill-box">
                        <input type="checkbox" className="agree-checkbox" />
                        <span class='agree-text'>I agree to receive updates and promotions about Agoda and its affiliates or business partners via various channels, including WhatsApp. Opt out anytime. Read more in the Privacy Policy.</span>
                    </div>
                    <div className="fill-box">
                        <div className="create-account-button fill-box-button">
                            <button><span className='button-typography'>Sign up</span></button>
                        </div>
                    </div>
                    <hr className="line" />
                    <div className="fill-box">
                        <div className="already-have-account-button fill-box-button">
                            <button><span className='button-typography'>Already have an account? Sign in</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateAccountContainer;