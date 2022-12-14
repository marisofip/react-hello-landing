import React from "react";
import Menu from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"

//create your first component
const Home = () => {
	return (
	<>	
	<Menu/>
	<Jumbotron/>
	</>
	);
	};
			

	
export default Home;
//ReactDOM.render(<Menu/>, document.querySelector("#home"));