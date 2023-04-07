import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhotoSection from '../helpers/PhotoSection.jsx';
import SkillsList from '../helpers/SkillsList.jsx';
import '../styles/Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='about'>
				<div className='prompt'>
					<h1>Hi! My name is Mateusz</h1>
					<PhotoSection />
					<p>
						I am a frontend developer with a drive for growth and
						programming, who gained knowledge independently using
						YouTube, Udemy, and Codecademy.
					</p>
					<a
						href='https://github.com/KroMateusz'
						target='_blank'
						rel='noreferrer'
					>
						<GitHubIcon />
					</a>
					<a
						href='https://www.linkedin.com/in/mateusz-krochmal-34936117b/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedInIcon />
					</a>
				</div>
			</div>
			<h1 className='skills'>My skills: </h1>
			<div className='skills-images'>
				{SkillsList.map((item) => (
					<img src={item.image} key={item.id} />
				))}
			</div>
		</div>
	);
}

export default Home;
