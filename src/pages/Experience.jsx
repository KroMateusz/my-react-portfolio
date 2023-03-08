import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineComponent,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import '../styles/Experience.css';

function Experience() {
	return (
		<div className='experience'>
			<VerticalTimeline lineColor='#1f3d9d'>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='2020'
					iconStyle={{ background: '#1f3d9d', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className='vertical-timeline-element-title'>
						My random High School, Random Place, Random State
					</h3>
					<p>High School Diploma</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Experience;
