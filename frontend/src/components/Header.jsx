const Header = () => {
    return (
        <section id="header-section" className="bg-white shadow-md flex flex-row py-0 px-4 items-center">
            <div id="header-left-container" className="container">
                <nav id="header-nav-logo-links" className="flex">
                    <div id="header-nav-logo" class="box">
                        <a href="/" id="header-nav-logo-logo-link" alt="Agoda logo Home link">
                            <div class="box" className="flex">
                                <div id="primarly-logo" class="box" className="flex">
                                    <div class="box">
                                        <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" width="100%" height="100%" alt="Primary Logo" />
                                    </div>
                                </div>
                                <img src="https://pix6.agoda.net/images/MVC/default/logo-en.svg" alt="Secondary Logo" />
                            </div>
                        </a>
                        {/* <Link id="header-nav-logo" to="/" className="flex items-center"><img src={header__logo} alt="header-logo" className="w-20" /></Link> */}
                    </div>
                    <div id="header-nav-links-container" class="box header-link-container" className="flex">
                        <div class="link-container">
                            <div id="header-hotels" class="link-container">
                                <a href="/" id="header-hotels-link">
                                    <span class="typography">Hotels & Homes</span>
                                </a>
                            </div>
                        </div>
                        <div class="link-container">
                            <div id="header-packages" class="link-container">
                                <a href="/packages" id="header-flight-hotel-packages-links">
                                    <span class="typography">Flight + Hotel</span>
                                </a>
                            </div>
                        </div>
                        <div class="link-container">
                            <div id="header-flights" class="link-container">
                                <a href="/packages" id="header-flights-links">
                                    <span class="typography">Flights</span>
                                </a>
                            </div>
                        </div>
                        <div class="link-container">
                            <div id="header-activities" class="link-container">
                                <a href="/packages" id="header-flights-links">
                                    <span class="typography">Activities</span>
                                </a>
                            </div>
                        </div>
                        <div class="link-container">
                            <div id="header-transportation" class="link-container">
                                <div className="flex">
                                    <div className="flex" >
                                        <a id="header-transportation-links" type="button">
                                            <span class="menu-link">
                                                <span class="typography">Transport</span>
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
                        <div class="link-container">
                            <div id="header-activities" class="link-container">
                                <a href="/deals" target="_blank" id="header-deals-links">
                                    <span class="typography">Coupons & Deals</span>
                                </a>
                            </div>
                        </div>
                        <div class="link-container">
                            <div id="header-esim" class="link-container">
                                <a href="/" target="_blank" id="header-esim-links">
                                    <span class="typography">eSIM</span>
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
                        <div class="link-container">
                            <div id="header-travel-tips" class="link-container">
                                <a href="/traveltips" target="_blank" id="header-travel-tips-links">
                                    <span class="typography">Travel Itineraries</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* <div id="header-nav-links-container" class="box">
                        <ul id="header-nav-link" className="flex flex-row">
                            <li id="header-nav-hotel-home" className="flex items-center space-x-4"><span id="typo-hotel-home">Hotels & Home</span></li>
                            <li id="header-nav-flight-hotel" className="flex items-center space-x-4"><span id="typo-flight-hotel">Flight+ Hotel</span></li>
                            <li id="header-nav-flights" className="flex items-center space-x-4"><span id="typo-flights">Flights</span></li>
                            <li id="header-nav-activity" className="flex items-center space-x-4"><span id="typo-activity">Activity</span></li>
                            <li id="header-nav-transport" className="flex items-center space-x-4"><span id="typo-transport">Transport</span></li>
                            <li id="header-nav-coupons-deals" className="flex items-center space-x-4"><span id="typo-coupons-deals">Coupons & Deals</span></li>
                            <li id="header-nav-esim" className="flex items-center space-x-4"><span id="typo-esim">eSIM</span></li>
                            <li id="header-nav-travel-guides" className="flex items-center space-x-4"><span id="typo-travel-guides">Travel Guides</span></li>
                            <li id="header-nav-travel-itineraries" className="flex items-center space-x-4"><span id="typo-travel-itineraries">Travel Itineraries</span></li>
                        </ul>
                    </div> */}

                </nav>
            </div>
            <div id="header-right-container" className="container">
                <div id="header-signin-button"><button><div><span>Sign In</span></div></button></div>
                <div id="header-create-account-button"><button><div><span>Create Account</span></div></button></div>
                <div id="header-cart"><button>Cart</button></div>
                <div id="header-menu"><button>Menu</button></div>
            </div>
        </section>
    );
}

export default Header;