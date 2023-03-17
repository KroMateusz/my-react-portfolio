import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhotoSection from '../helpers/PhotoSection.jsx';
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
					<GitHubIcon />
					<LinkedInIcon />
					<EmailIcon />
				</div>
			</div>
			<div className='skills'>
				<h1>Skills</h1>
				<ol className='skills-list'>
					<li className='item'>
						<h2>JS</h2>
						<span></span>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Home;
