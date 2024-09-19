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
                                    <div class='primary-logo'>
                                        <img
                                            id='agoda-logo'
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
                                                    <svg
                                                    class='dropdown-svg' 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="1em" 
                                                    height="1em" 
                                                    viewBox="0 -4.5 20 20" 
                                                    version="1.1">
                                                        <title>arrow_down [#338]</title>
                                                        <desc>Created with Sketch.</desc>
                                                        <defs>
                                                        </defs>
                                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="#000000">
                                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                                    <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]">

                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
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
                                            <a href="/create-account" class='action-item-link'>
                                                <span class='create-account-typography'>Create account</span>
                                            </a>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class='action-item'>
                                <div class='action-item-sign-in'>
                                    <button id="sign-in-button" class='action-item-button'>
                                        <div class='base-button'>
                                            <div class='box'>
                                                <a href="/sign-in" class='action-item-link'>
                                                    <span class='sign-in-typography'>Sign in</span>
                                                </a>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="action-item">
                                <div className="action-item-currency">
                                    <div className="base-button">
                                        <div className="box">
                                            <span className='currency-typography'>฿</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="action-item">
                                <div className="action-item-flag">
                                    <div className="base-button">
                                        <div className="box">
                                            <img className='flag-img' src='https://cdn6.agoda.net/images/mobile/flag-us@2x.png'     width='26px'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class='action-item'>
                                <div class='action-item-list-your-place'>
                                    <button id="list-your-place-button" class='action-item-button'>
                                        <div class='base-button'>
                                            <div class='box'>
                                                <a href="/" class='action-item-link'>
                                                    <span class='list-your-place-typography'>List your place</span>
                                                </a>
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