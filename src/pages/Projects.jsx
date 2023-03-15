import React from 'react';
import ProjectItem from '../components/ProjectItem.jsx';
import { ProjectList } from '../helpers/ProjectList.jsx';

import '../styles/Projects.css';

function Projects() {
	return (
		<div className='projects'>
			<h1>My Personal Projects</h1>
			<div className='project-list'>
				{ProjectList.map((project, index) => {
					return (
						<ProjectItem
							id={index}
							name={project.name}
							image={project.image}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
