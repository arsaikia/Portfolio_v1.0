import React, { Component } from 'react';
import styled from 'styled-components';

import './snake.css';

const Container = styled.div`
	background: #222;
	background: radial-gradient(#333, #111);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	color: #fff;
	font: 100%/1.5 sans-serif;
	overflow: hidden;
`;

export default class Snake extends Component {
	componentDidMount () {
		const script = document.createElement('script');

		script.src = './snk.js';
		script.async = true;

		document.body.appendChild(script);
	}

	render () {
		return (
			<Container>
				<div class='bodyX score'>0</div>
				<div class='bodyX stage' />
			</Container>
		);
	}
}
