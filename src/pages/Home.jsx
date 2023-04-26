import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SkillsList from '../helpers/SkillsList.jsx';
import CertificatesList from '../helpers/CertificatesList.jsx';
import ShowOnScroll from '../helpers/ShowOnScroll.jsx';
import MyPhoto from '../assets/photos/my-photo.png';
import '../styles/Home.css';

function Home() {
	return (
		<div className='home'>
			<div className='about'>
				<div className='prompt'>
					<h1>Hi! My name is Mateusz</h1>
					<div className='photo-container'>
						<img src={MyPhoto} className='image' />
					</div>
					<p>
						<span>I</span>
						<span>am</span>
						<span>a</span>
						<span>frontend </span>
						<span>developer</span>
						<span>with</span>
						<span>a</span>
						<span>drive</span>
						<span>for</span>
						<span>growth</span>
						<span>and</span>
						<span>programming,</span>
						<span>who</span>
						<span>gained</span>
						<span>knowledge</span>
						<span>independently</span>
						<span>using</span>
						<span>Youtube,</span>
						<span>Udemy</span>
						<span>and</span>
						<span>Codecademy.</span>
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
			<div className='skills-container'>
				<ShowOnScroll />
				<div className='skills-images'>
					{SkillsList.map((item) => (
						<img src={item.image} key={item.id} />
					))}
				</div>
			</div>
			<div className='certificates-list'>
				{CertificatesList.map((item) => (
					<img src={item.image} key={item.id} />
				))}
			</div>
		</div>
	);
}

export default Home;
