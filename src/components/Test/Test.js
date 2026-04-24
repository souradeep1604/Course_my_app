import { useEffect, useState } from "react";

function Test() {
	// const [age, setAge] = useState(0);
	// const [name, setName] = useState("Souradeep");
	// const user = {
	// 	name: "Souradeep",
	// 	age: 24,
	// };
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
			});
	}, []);

	return (
		<div className="sw-hero">
			{users.map((user) => (
				<div key={user.id}>
					<h1>{user.name}</h1>
					<h1>
						{user.address.geo.lat}, {user.address.geo.lng}
					</h1>
				</div>
			))}
			{/* <button
				onClick={() => {
					setUser((prev) => ({ ...prev, age: prev.age + 1 }));
					setUser((prev) => ({ ...prev, name: "Sou" }));
				}}
			>
				+
			</button> */}
		</div>
	);
}

export default Test;
