import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div>
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
				<a
					href='https://www.facebook.com/mateusz.krochmal.39'
					target='_blank'
					rel='noreferrer'
				>
					<FacebookIcon />
				</a>
				<a href='tel:+48503334478' rel='noreferrer'>
					<PhoneIphoneIcon />
				</a>
				<a
					href='https://www.instagram.com/krommaa/'
					target='_blank'
					rel='noreferrer'
				>
					<InstagramIcon />
				</a>
				<p> &copy; 2023 Mateusz Krochmal </p>
			</div>
		</div>
	);
}

export default Footer;
