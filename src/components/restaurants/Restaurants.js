import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import "./Restaurants.css";

function Restaurants() {
	const [restaurants, setRestaurants] = useState([]);
	const trackRef = useRef(null);

	const fetchRestaurants = async () => {
		fetch("http://localhost:5000/api/restaurants")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setRestaurants(json);
			});
	};

	useEffect(() => {
		fetchRestaurants();
	}, []);

	const scrollCards = (direction) => {
		console.log(trackRef);
		trackRef.current.scrollBy({
			left: 300 * direction,
			behavior: "smooth",
		});
	};

	return (
		<div className="sw-restaurants">
			<div className="sw-chain-section_header">
				<h2 className="sw-restaurants__title">Top Restaurants Chains In Kolkata</h2>
				<div className="sw-chain-section_controls">
					<button
						type="button"
						onClick={() => {
							scrollCards(-1);
						}}
						className="sw-chain-section_control"
					>
						<MdKeyboardArrowLeft className="sw-chain-section_controls-icon" />
					</button>
					<button type="button" onClick={() => scrollCards(1)} className="sw-chain-section_control">
						<MdKeyboardArrowRight className="sw-chain-section_controls-icon" />
					</button>
				</div>
			</div>
			<div className="sw-chain-section_content" ref={trackRef}>
				{restaurants.map((restaurant, index) => (
					<div className="sw-chain-section_content-card" key={index}>
						<div className="sw-chain-section_content-card_media">
							<img src={restaurant.image} alt={restaurant.name} className="sw-chain-section_content-card_img" />
							<p className="sw-chain-section_content-card_offer">{restaurant.offer}</p>
						</div>
						<div className="sw-chain-section_content-card_content">
							<div className="sw-chain-section_content-card_content_title text-white">{restaurant.name}</div>
							<div className="sw-chain-section_content-card_content_meta">
								<FaStar color="#FFD700" className="sw-chain-section_content-card_content_meta_icon" />
								<span>{restaurant.rating}</span>
								<span>•</span>
								<span>{restaurant.deliveryTime}</span>
							</div>
							<p className="sw-chain-section_content-card_content_cuisine">{restaurant.cuisine}</p>
							<p className="sw-chain-section_content-card_content_location">{restaurant.location}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Restaurants;
