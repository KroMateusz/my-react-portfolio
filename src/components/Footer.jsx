import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div>
				<GitHubIcon />
				<LinkedInIcon />
				<EmailIcon />
				<PhoneIphoneIcon />
				<InstagramIcon />
				<p> &copy; 2023 Mateusz Krochmal </p>
			</div>
		</div>
	);
}

export default Footer;
