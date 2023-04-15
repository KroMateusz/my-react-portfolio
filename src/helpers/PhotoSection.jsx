import MyPhoto from '../assets/photos/my-photo.png';
import '../styles/PhotoSection.css';

function PhotoSection() {
	return (
		<div className='photo-container'>
			<img src={MyPhoto} className='image' />
		</div>
	);
}

export default PhotoSection;
