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
                            <div id='links-package' class='links-container'>
                                <div id='header-package' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Flight + Hotel</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-hotels' class='links-container'>
                                <div id='header-hotels' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Hotels & Homes</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-flights' class='links-container'>
                                <div id='header-flights' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Flights</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-transportation' class='links-container'>
                                <div id='header-transportation' class='menu-item-container'>
                                    <div class='transportation-container'>
                                        <div class='box'>
                                            <div class='box'>
                                                <a class='header-links' type='button'>
                                                    <span class='menu-link-dropdown'>
                                                        <span class='link-typography'>Transport</span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class='dropdown-box'>
                                                <div class='dropdown'>
                                                    <div id='drop-down-button'>∨</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='links-activities' class='links-container'>
                                <div id='header-activities' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Activities</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-deals' class='links-container'>
                                <div id='header-deals' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Coupons & Deals</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-esim' class='links-container'>
                                <div id='header-esim' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">eSIM</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-travel-guides' class='links-container'>
                                <div id='header-travel-guides' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Travel Guides</span>
                                    </a>
                                </div>
                            </div>
                            <div id='links-travel-tips' class='links-container'>
                                <div id='header-travel-tips' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Travel Itineraries</span>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </nav>
                </div>
                <div id='header-right-container' class='box'>
                    <div class='action-bar'>
                        <div class='action-item-parent'>
                            <div class='action-item'>
                                <button id='create-account-button' class='action-item-button'>
                                    <div class='base-button'>
                                        <div class='box'>
                                            <span class='create-account-typography'>Create account</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class='action-item'>
                                <div class='action-item-sign-in'>
                                    <button id="sign-in-button" class='action-item-button'>
                                        <div class='base-button'>
                                            <div class='box'>
                                                <span class='sign-in-box'>Sign in</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='action-box'>
                        <div class='shopping-cart'>
                            <div class='box'>
                                <button id='shopping-cart-button'>
                                    <div class='base-button'>
                                        <div class='box'>
                                            <div class='box'>
                                                <div class='box'>
                                                    <svg
                                                        width='1em'
                                                        height='1em'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewbox='0 0 24 24'
                                                        class='svg-icon'>
                                                        <path
                                                            d='M3.133 3c.7 0 1.3.482 1.459 1.152l.026.136L4.862 6h15.536a1 1 0 0 1 1 1l-.005.093-.013.091-1.083 5.777a2.5 2.5 0 0 1-2.286 2.033l-.17.006H6.146l.103.712a1.5 1.5 0 0 0 1.346 1.282l.139.006H19.5a.5.5 0 0 1 .09.992L19.5 18h-2a2.5 2.5 0 1 1-4 0h-3a2.5 2.5 0 1 1-3.807-.228 2.496 2.496 0 0 1-1.404-1.753l-.03-.165L3.629 4.429a.5.5 0 0 0-.404-.42L3.133 4H1.5a.5.5 0 0 1-.09-.992L1.5 3h1.633zM8.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9.496-4H17.84a1.5 1.5 0 0 0 1.441-1.084l.033-.14L20.398 7H5.005l.999 7z'>
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class='action-box'>
                        <div class='hamburger-menu'>
                            <span class='box'>
                                <button id='header-hamburger-menu'>
                                    <div class='base-button'>
                                        <div class='box'>
                                            <svg
                                                width='1em'
                                                height='1em'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewbox='0 0 24 24'
                                                class='svg-icon'>
                                                <path
                                                    fill-rule='evenodd'
                                                    d='M21.5 20a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 0 1 0-1h19z'
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </section >
        </header >
    );
}

export default NewHeader;