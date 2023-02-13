import React from "react";
import Menu from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
	<>	
	<div className="text-center">
	<Menu/>
	</div>
	<div className="container my-4 p-5">
	<Jumbotron/>
	</div>
	<div className="container my-4">
	<div className="row justify-content-evenly">
	<Card/>	
	<Card/>	
	<Card/>	
	<Card/>	

	</div>
		</div>
		<div className="text-center">
	<Footer/>
	</div>

	</>
	);
	};
			

	
export default Home;
//ReactDOM.render(<Menu/>, document.querySelector("#home"));