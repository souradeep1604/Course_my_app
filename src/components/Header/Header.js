import "./Header.css";
import logo from "../../assets/swiggy_logo_white.avif";

function Header() {
	return (
		<div className="sw-header">
			<div className="sw-header__inner">
				<a href="/" className="sw-header__logo">
					<img src={logo} alt="logo" className="sw-header__logo-img" />
				</a>

				<nav className="sw-header__nav">
					<a href="/corporate" className="sw-header__link">
						Swiggy Corporate
					</a>
					<a href="/partner" className="sw-header__link">
						Partner with us
					</a>
					<div className="sw-header__link sw-header__get-app">Get the App</div>
					<div className="sw-header__link sw-header__signin">Sign in</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
