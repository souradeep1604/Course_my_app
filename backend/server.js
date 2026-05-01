const express = require("express");
const cors = require("cors");
const restaurants = require("./data/restaurants.json");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all restaurants
app.get("/api/restaurants", (req, res) => {
	res.json(restaurants);
});

// GET single restaurant by id
app.get("/api/restaurants/:id", (req, res) => {
	const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id));
	if (!restaurant) {
		return res.status(404).json({ message: "Restaurant not found" });
	}
	res.json(restaurant);
});

app.listen(PORT, () => {
	console.log(`Restaurant API running at http://localhost:${PORT}`);
});
