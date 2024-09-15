import '../components/NewHeader.css'

const NewHeader = () => {
    return (
        <header id='page-header'>
            <section id='header-container-section'>
                <div id='header-left-container' class='box'>
                    <nav id='header-logo-and-links'>
                        <section id='header-logo-section'>
                            <a href="/" id='header-logo-link'>
                                <div class='logo-box'>
                                    <div id='primary-logo'>
                                        <img 
                                        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" 
                                        alt="header-logo"
                                        width="100%"
                                        height="100%" />
                                    </div>
                                </div>
                            </a>
                        </section>
                        <section id='header-links-section'>
                            <div class='header-links-container'>
                                <div id='header-hotels'>
                                    <a href='/' class='header-link'>
                                        <span class="link-typography">Hotels & Homes</span>
                                    </a>
                                </div>   
                            </div>
                        </section>  
                    </nav>
                </div>
                <div id='header-right-container' class='box'>traveltips</div>
            </section>
        </header>
    );
}

export default NewHeader;