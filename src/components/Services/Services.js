import React from "react";
import "./Services.css";
import DELIVERY from "../../assets/delivery.avif";
import INSTAMART from "../../assets/instamart.avif";
import DINEOUT from "../../assets/dineout.avif";

function Services() {
	const cards = [
		{
			img: DELIVERY,
			alt: "Delivery",
		},
		{
			img: INSTAMART,
			alt: "Instamart",
		},
		{
			img: DINEOUT,
			alt: "Dineout",
		},
	];
	return (
		<div className="sw-services">
			{cards.map((card, index) => (
				<img key={index} src={card.img} alt={card.alt} className="sw-services__img" />
			))}
		</div>
	);
}
export default Services;
