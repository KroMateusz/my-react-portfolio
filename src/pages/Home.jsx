import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Home() {
	return (
		<div className='home'>
			<div className='about'>
				<h2>Hi! My name is Mateusz</h2>
				<div className='prompt'>
					<p>
						As a Frontend Developer, I have a very good knowledge of
						HTML, CSS, and JavaScript languages as well as libraries
						and frameworks such as React or Vue.js.
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
						<h2>Frontend</h2>
						<span></span>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Home;
