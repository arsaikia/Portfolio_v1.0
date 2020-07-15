import React from 'react';
import './Loader.css';
import styled from 'styled-components';

const CenteredContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #1d1e22;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Loader = () => {
	return (
		<CenteredContainer>
			<div class='rubiks-loader'>
				<div class='cube'>
					<div class='face front piece row-top    col-left   yellow' />
					<div class='face front piece row-top    col-center green ' />
					<div class='face front piece row-top    col-right  white ' />
					<div class='face front piece row-center col-left   blue  ' />
					<div class='face front piece row-center col-center green ' />
					<div class='face front piece row-center col-right  blue  ' />
					<div class='face front piece row-bottom col-left   green ' />
					<div class='face front piece row-bottom col-center yellow' />
					<div class='face front piece row-bottom col-right  red   ' />

					<div class='face down  piece row-top    col-center green ' />
					<div class='face down  piece row-center col-center red   ' />
					<div class='face down  piece row-bottom col-center white ' />

					<div class='face right piece row-center col-left   yellow' />
					<div class='face right piece row-center col-center green ' />
					<div class='face right piece row-center col-right  blue  ' />

					<div class='face up    piece row-top    col-left   yellow' />
					<div class='face up    piece row-center col-left   blue  ' />
					<div class='face up    piece row-bottom col-left   green ' />

					<div class='face left  piece row-bottom col-left   green ' />
					<div class='face left  piece row-bottom col-center yellow' />
					<div class='face left  piece row-bottom col-right  red   ' />
				</div>
			</div>
		</CenteredContainer>
	);
};

export default Loader;
