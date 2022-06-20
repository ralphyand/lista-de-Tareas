import React from "react";
import Tarea from "./tarea.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		<div id="listContainer" className=" container bg-light text-dark justify-content-center mt-5 text-center "> 
			     <Tarea/>				
		</div>

	);
};

export default Home;
