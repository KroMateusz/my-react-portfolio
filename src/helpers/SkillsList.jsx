import React from 'react';
import Bootstrap from '../assets/icons/Bootstrap.svg';
import CSS from '../assets/icons/CSS.svg';
import Git from '../assets/icons/Git.svg';
import HTML from '../assets/icons/HTML.svg';
import JavaScript from '../assets/icons/JavaScript.svg';
import NodeJS from '../assets/icons/NodeJS-Dark.svg';
import Postman from '../assets/icons/Postman.svg';
import ReactIcon from '../assets/icons/React-Dark.svg';
import Sass from '../assets/icons/Sass.svg';
import TypeScript from '../assets/icons/TypeScript.svg';
import Vue from '../assets/icons/VueJS-Dark.svg';
import Webpack from '../assets/icons/Webpack-Dark.svg';

const SkillsList = [
	{
		skill: 'Bootstrap',
		image: Bootstrap,
	},
	{
		skill: 'CSS',
		image: CSS,
	},
	{
		skill: 'Git',
		image: Git,
	},
	{
		skill: 'HTML',
		image: HTML,
	},
	{
		skill: 'JavaScript',
		image: JavaScript,
	},
	{
		skill: 'NodeJS',
		image: NodeJS,
	},
	{
		skill: 'Postman',
		image: Postman,
	},
	{
		skill: 'ReactIcon',
		image: ReactIcon,
	},
	{
		skill: 'TypeScript',
		image: TypeScript,
	},
	{
		skill: 'Sass',
		image: Sass,
	},
	{
		skill: 'Vue',
		image: Vue,
	},
	{
		skill: 'Webpack',
		image: Webpack,
	},
];

// const SkillsList = () => {
// 	{
// 		skillsArr.map((item) => {
// 			return (
// 				<div>
// 					<h1>{item.skill}</h1> <img src={item.image} />
// 				</div>
// 			);
// 		});
// 	}
// };

export default SkillsList;
