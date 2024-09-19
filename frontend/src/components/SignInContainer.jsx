// using most same styles from CreateAccountContainer component
import './SignInContainer.css';
import './CreateAccountContainer.css';

const SignInContainer = () => {    
    
    return (
        <section className='ca-si-section'>
            <div className="main-container">
                <form className="sign-in-panel ca-si-panel">
                    <div className="ca-si-panel-header">
                        <h3 id='header-typography'>Sign In</h3>
                        <h5 id='security-info'>For security, please sign in to access your information</h5>
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
                    <div className="fill-box">
                        <div className="sign-in-button fill-box-button">
                            <button><span className='button-typography'>Sign up</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignInContainer;