import "./Hero.css";
import LEFT_IMG from "../../assets/Veggies_new.avif";
import Right_IMG from "../../assets/Sushi_replace.avif";

function Hero() {
	return (
		<div className="sw-hero">
			<img src={LEFT_IMG} alt="Vegetables" className="sw-hero__left-img" />
			<div className="sw-hero__center-text">
				<h1 className="sw-hero__title">Order food & groceries. Discover best restaurants. Swiggy it!</h1>
			</div>
			<img src={Right_IMG} alt="Sushi" className="sw-hero__right-img" />
		</div>
	);
}

export default Hero;
