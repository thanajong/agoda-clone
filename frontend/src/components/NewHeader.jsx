import '../components/NewHeader.css'

const NewHeader = () => {
    return (
        <header id='page-header'>
            <section id='header-container-section'>
                <div id='header-left-container' class='box'>
                    <nav id='header-logo-and-links'>
                        <section id='header-logo-section'>
                            <a href="/" id='header-logo-link'>
                                <img 
                                src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" 
                                alt="header-logo"
                                width="100%"
                                height="100%" />
                            </a>
                        </section>
                        <section id='header-links-section'>

                        </section>
                        <div id='header-links'>

                        </div>
                    </nav>
                </div>
                <div id='header-right-container' class='box'>traveltips</div>
            </section>
        </header>
    );
}

export default NewHeader;