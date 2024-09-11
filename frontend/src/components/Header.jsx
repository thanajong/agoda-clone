import { Link } from "react-router-dom";
import header__logo from '../assets/agoda-header-logo.svg';

const Header = () => {
    return (
        <section id="header-section" className="bg-white shadow-md flex flex-row px-16 py-2 container flex items-center justify-center p-4">
            <div id="header-left-container" className="container flex items-center justify-center p-4">
                <nav id="header-nav-logo-link" className="flex justify-between px-2">
                    <Link id="header-nav-logo" to="/" className="flex items-center"><img src={header__logo} alt="header-logo" className="w-20" /></Link>
                    <ul id="header-nav-link" className="flex flex-row whitespace-nowrap">
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
                </nav>
            </div>
            <div id="header-right-container" className="container flex items-center justify-center p-4">
                <div id="header-signin-button"><button><div><span>Sign In</span></div></button></div>
                <div id="header-create-account-button"><button><div><span>Create Account</span></div></button></div>
                <div id="header-cart"><button>Cart</button></div>
                <div id="header-menu"><button>Menu</button></div>
            </div>
        </section>
    );
}

export default Header;