import React, { useState, useEffect } from 'react';

function ShowOnScroll() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	}, []);

	const listenToScroll = () => {
		let heightToShow = 300;
		const winScroll = document.documentElement.scrollTop;

		if (winScroll > heightToShow) {
			!isVisible && setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	return <h1 className={isVisible ? 'show' : 'hide'}>My Skills</h1>;
}

export default ShowOnScroll;
