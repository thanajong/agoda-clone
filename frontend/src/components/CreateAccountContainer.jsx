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
                            <input type="text" className="fill-box-user-input" placeholder='First name'/>
                        </div>
                    </div>
                    <div id='last-name' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Last name</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Last name'/>
                        </div>
                    </div>
                    <div id='email' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Email</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Email'/>
                        </div>
                    </div>
                    <div id='password' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Password</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Password'/>
                        </div>
                    </div>
                    <div id='confirm-password' className="fill-box">
                        <div className="fill-box-header">
                            <span className="fill-box-header-typography">Confirm password</span>
                        </div>
                        <div className="fill-box-user">
                            <input type="text" className="fill-box-user-input" placeholder='Confirm password'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateAccountContainer;