import React, { Fragment, useState, useEffect } from 'react';
import './index.css';
import './App.css';
import Loader from '../src/Components/Loader/Loader';
import LandingPage from './Components/LandingPage/LandingPage.js';
import Snake from './Components/SnakeGame/snake';

function App () {
	const [ isLoading, setIsLoading ] = useState(true);
	useEffect(
		() => {
			setTimeout(() => {
				setIsLoading(false);
			}, Math.random() * 5000);
		},
		[ isLoading ]
	);

	// if (isLoading) {
	// 	return <Loader />;
	// }

	return (
		<Fragment>
			<LandingPage />
		</Fragment>
	);
}

export default App;
