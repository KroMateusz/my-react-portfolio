import MyPhoto from '../assets/my-photo.png';

function PhotoSection() {
	return (
		<div className='container'>
			<img src={MyPhoto} className='image' />
		</div>
	);
}

export default PhotoSection;
