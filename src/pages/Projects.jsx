import React from 'react';
import ProjectItem from '../components/ProjectItem.jsx';
import Ecommerce from '../assets/e-commerce.png';
import WeatherApp from '../assets/weather-app.png';

import '../styles/Projects.css';

function Projects() {
	return (
		<div className='projects'>
			<h1>My Personal Projects</h1>
			<div className='project-list'>
				<ProjectItem name='Shopping Cart' image={Ecommerce} />
				<ProjectItem name='Weather Application' image={WeatherApp} />
			</div>
		</div>
	);
}

export default Projects;
