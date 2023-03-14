import React from 'react';

function ProjectItem({ image, name }) {
	return (
		<div className='project-item'>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='bg-image'
			/>
			<h1>{name}</h1>
		</div>
	);
}

export default ProjectItem;
