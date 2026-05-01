import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Restaurants from "../../components/restaurants/Restaurants";
import Services from "../../components/Services/Services";
import Test from "../../components/Test/Test";
import "./SwiggyPage.css";

function SwiggyPage() {
	return (
		<div className="sw-page">
			<Header />
			<Hero />
			<Services />
			<Restaurants />
			{/* <Test /> */}
		</div>
	);
}

export default SwiggyPage;
