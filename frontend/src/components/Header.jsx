import { Link } from "react-router-dom";
import header__logo from '../assets/agoda-header-logo.svg';

const Header = () => {
    return (
        <section id="header-section" className="bg-white shadow-md flex flex-row">
            <div id="header-left-container" className="container flex items-center justify-between p-4">
                <nav id="header-nav-logo-link" className="flex justify-between px-2">
                    <Link id="header-nav-logo" to="/" className="flex items-center"><img src={header__logo} alt="header-logo" className="w-20" /></Link>
                    <div id="header-nav-hotel-home" className="flex items-center space-x-4"><span id="typo-hotel-home">Hotels & Home</span></div>
                    <div id="header-nav-flight-hotel" className="flex items-center space-x-4"><span id="typo-flight-hotel">Flight+ Hotel</span></div>
                    <div id="header-nav-flights" className="flex items-center space-x-4"><span id="typo-flights">Flights</span></div>
                    <div id="header-nav-activity" className="flex items-center space-x-4"><span id="typo-activity">Activity</span></div>
                    <div id="header-nav-transport" className="flex items-center space-x-4"><span id="typo-transport">Transport</span></div>
                    <div id="header-nav-coupons-deals" className="flex items-center space-x-4"><span id="typo-coupons-deals">Coupons & Deals</span></div>
                    <div id="header-nav-esim" className="flex items-center space-x-4"><span id="typo-esim">eSIM</span></div>
                    <div id="header-nav-travel-guides" className="flex items-center space-x-4"><span id="typo-travel-guides">Travel Guides</span></div>
                    <div id="header-nav-travel-itineraries" className="flex items-center space-x-4"><span id="typo-travel-itineraries">Travel Itineraries</span></div>
                </nav>
            </div>
            <div id="header-right-container" className="container flex items-center justify-between p-4">
            </div>
        </section>
    );
}

export default Header;