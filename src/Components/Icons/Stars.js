import React, { Fragment } from 'react';

const FilledStar = ({ width = '22', height = '20', color = '#292929' }) => {
	return (
		<svg width={width} height={height} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7 0L9.163 4.60778L14 5.35121L10.5 8.93586L11.326 14L7 11.6078L2.674 14L3.5 8.93586L0 5.35121L4.837 4.60778L7 0Z'
				fill={color}
			/>
		</svg>
	);
};

const EmptyStar = ({ width = '22', height = '20', color = '#E8EDFF' }) => {
	return (
		<svg width={width} height={height} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7 0L9.163 4.60778L14 5.35121L10.5 8.93586L11.326 14L7 11.6078L2.674 14L3.5 8.93586L0 5.35121L4.837 4.60778L7 0Z'
				fill='#E8EDFF'
			/>
			<path
				d='M6.93848 11.6417L6.99987 11.6078L11.3259 14L10.4999 8.93586L13.9999 5.35121L9.16287 4.60778L6.99987 0L6.93848 0.13078V11.6417Z'
				fill={color}
			/>
		</svg>
	);
};

const HalfStar = ({ width = '22', height = '20', colorFill = '#292929', colorEmpty = '#E8EDFF' }) => {
	return (
		<svg width={width} height={height} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7 0L9.163 4.60778L14 5.35121L10.5 8.93586L11.326 14L7 11.6078L2.674 14L3.5 8.93586L0 5.35121L4.837 4.60778L7 0Z'
				fill={colorFill}
			/>
			<path
				d='M6.93848 11.6417L6.99987 11.6078L11.3259 14L10.4999 8.93586L13.9999 5.35121L9.16287 4.60778L6.99987 0L6.93848 0.13078V11.6417Z'
				fill={colorEmpty}
			/>
		</svg>
	);
};

export { FilledStar, EmptyStar, HalfStar };
