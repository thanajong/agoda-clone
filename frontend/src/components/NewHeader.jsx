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
                            <div class='links-container'>
                                <div id='header-hotels' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Hotels & Homes</span>
                                    </a>
                                </div>
                            </div>
                            <div class='links-container'>    
                                <div id='header-package' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Flight + Hotel</span>
                                    </a>
                                </div>   
                            </div>
                            <div class='links-container'>    
                                <div id='header-flights' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Flights</span>
                                    </a>
                                </div>
                            </div>       
                            <div class='links-container'>    
                                <div id='header-activities' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Activities</span>
                                    </a>
                                </div>      
                            </div>
                            <div class='links-container'>
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
                            <div class='links-container'>    
                                <div id='header-deals' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Coupons & Deals</span>
                                    </a>
                                </div>      
                            </div>  
                            <div class='links-container'>    
                                <div id='header-esim' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">eSIM</span>
                                    </a>
                                </div>      
                            </div>  
                            <div class='links-container'>    
                                <div id='header-travel-guides' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Travel Guides</span>
                                    </a>
                                </div>      
                            </div>  
                            <div class='links-container'>    
                                <div id='header-travel-tips' class='menu-item-container'>
                                    <a href='/' class='header-links'>
                                        <span class="link-typography">Travel Itineraries</span>
                                    </a>
                                </div>      
                            </div>  
                        </section>
                    </nav>
                </div>
                <div id='header-right-container' class='box'>RIGHT-SECTION</div>
            </section>
        </header>
    );
}

export default NewHeader;