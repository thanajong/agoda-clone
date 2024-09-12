const Header = () => {
    return (
        <section id="header-section" className="bg-white shadow-md py-0 px-4 flex flex-row justify-center items-center">
            <div id="header-left-container" className="container flex flex-row">
                <nav id="header-nav-logo-links" className="flex">
                    <div id="header-nav-logo" className="box">
                        <a href="/" id="header-nav-logo-logo-link" alt="Agoda logo Home link">
                            <div className="box flex">
                                <div id="primarly-logo" className="box flex">
                                    <div className="box">
                                        <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" width="100%" height="100%" alt="Primary Logo" />
                                    </div>
                                </div>
                                <img src="https://pix6.agoda.net/images/MVC/default/logo-en.svg" alt="Secondary Logo" />
                            </div>
                        </a>
                    </div>
                    <div id="header-nav-links-container" className="box header-link-container flex">
                        <div className="link-container">
                            <div id="header-hotels" className="link-container">
                                <a href="/" id="header-hotels-link">
                                    <span className="typography">Hotels & Homes</span>
                                </a>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-packages" className="link-container">
                                <a href="/packages" id="header-flight-hotel-packages-links">
                                    <span className="typography">Flight + Hotel</span>
                                </a>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-flights" className="link-container">
                                <a href="/packages" id="header-flights-links">
                                    <span className="typography">Flights</span>
                                </a>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-activities" className="link-container">
                                <a href="/packages" id="header-flights-links">
                                    <span className="typography">Activities</span>
                                </a>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-transportation" className="link-container">
                                <div className="flex">
                                    <div className="flex" >
                                        <a id="header-transportation-links" type="button">
                                            <span className="menu-link">
                                                <span className="typography">Transport</span>
                                            </span>
                                        </a>
                                        <div>
                                            <svg role="img" opacity="1">
                                                <use href="https://www.agoda.com/?ds=ZWoh7lEkKVrwLCR6#43f45643"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-activities" className="link-container">
                                <a href="/deals" target="_blank" id="header-deals-links">
                                    <span className="typography">Coupons & Deals</span>
                                </a>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-esim" className="link-container">
                                <a href="/" target="_blank" id="header-esim-links">
                                    <span className="typography">eSIM</span>
                                </a>
                            </div>
                        </div>
                        <div class="link-container">
                            <div id="header-travel-guides" class="link-container">
                                <a href="/travel-guides" target="_blank" id="header-travel-guides-links">
                                    <span class="typography">Travel Guides</span>
                                </a>
                            </div>
                        </div>
                        <div className="link-container">
                            <div id="header-travel-tips" className="link-container">
                                <a href="/traveltips" target="_blank" id="header-travel-tips-links">
                                    <span className="typography">Travel Itineraries</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
            <div id="header-right-container" className="container flex flex-row">
                <div id="action-bar">
                    <button><span>Sign in</span></button>
                    <button><span>Create account</span></button>
                </div>
                <div className="box">
                    <div id="shopping-cart" className="box">
                        <div className="box flex">
                            <button id="shopping-cart-button">
                                <div>
                                    <div className="box">
                                        <div className="box">
                                            <div className="box flex">
                                                <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewbox='0 0 24 24' className='svg-item'>
                                                    <path d='M3.133 3c.7 0 1.3.482 1.459 1.152l.026.136L4.862 6h15.536a1 1 0 0 1 1 1l-.005.093-.013.091-1.083 5.777a2.5 2.5 0 0 1-2.286 2.033l-.17.006H6.146l.103.712a1.5 1.5 0 0 0 1.346 1.282l.139.006H19.5a.5.5 0 0 1 .09.992L19.5 18h-2a2.5 2.5 0 1 1-4 0h-3a2.5 2.5 0 1 1-3.807-.228 2.496 2.496 0 0 1-1.404-1.753l-.03-.165L3.629 4.429a.5.5 0 0 0-.404-.42L3.133 4H1.5a.5.5 0 0 1-.09-.992L1.5 3h1.633zM8.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9.496-4H17.84a1.5 1.5 0 0 0 1.441-1.084l.033-.14L20.398 7H5.005l.999 7z'></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="hamburger-menu">
                        <span className='box'>
                            <button id='header-hamburger-menu'>
                                <div>
                                    <div className='box'>
                                        <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                            <path fill-rule='evenodd' d='M21.5 20a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 0 1 0-1h19z'></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;