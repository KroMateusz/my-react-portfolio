import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import '../styles/Experience.css';

function Experience() {
	return (
		<div className='experience'>
			<VerticalTimeline lineColor='var(--primary)'>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2020'
					iconStyle={{ background: 'var(--primary)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						One day in September, I decided to expand my knowledge
						in programming. I explored different areas of
						programming and decided to focus on frontend
						development.
					</h3>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2021'
					iconStyle={{
						background: 'var(--primary)',
						color: '#fff',
						text: 'left',
					}}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						Complete the basic courses of HTML, Bootstrap CSS, LESS,
						SASS on Udemy and Codecademy.
					</h3>
					<ul>
						<p>
							Web developer od podstaw w 15 dni - Samuraj
							Programowania
						</p>
						<p>
							Front-end zaawansowany w 15 dni - Samuraj
							Programowania
						</p>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2021'
					iconStyle={{ background: 'var(--primary)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						First steps on GitHub and JavaScript and finishing the
						courses on Udemy. First projects using HTML, CSS, JS and
						pushing code to GitHub. Webpack, ESLint, Npm, Yarn,
						Object-Oriented Programming.
					</h3>
					<p>Wprowadzenie do Git i GitHub - Samuraj Programowania</p>
					<p>Programowanie w JavaScript - Samuraj Programowania</p>
					<p>
						Zaawansowane projekty w CSS i JavaScript - Samuraj
						Programowania
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2021'
					iconStyle={{ background: 'var(--primary)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						Writing my first code using React framework. JSX, Props,
						Hooks, Lifecycle of Components, React Router
					</h3>
					<p>
						React od podstaw - Samuraj Programowania, Mateusz
						Domanski
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2022'
					iconStyle={{ background: 'var(--primary)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						Creating first applications in Vue.js. Component
						Communication, Http Requests, Vuex, Composition API
					</h3>
					<p>
						VUe - The Complete Guide (incl. Ruter & Composition API)
						- Maximilian Schwarzmuller
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2023'
					iconStyle={{ background: 'var(--primary)', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						Creating my own portfolio website using React, React
						Router, Bootstrap, JSX, HTML, CSS. Adding the rest of
						projects on the GitHub.
					</h3>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Experience;
