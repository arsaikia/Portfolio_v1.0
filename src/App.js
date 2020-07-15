import React, { Fragment, useState, useEffect } from 'react';
import './index.css';
import './App.css';
import Loader from '../src/Components/Loader/Loader';
import LandingPage from './Components/LandingPage/LandingPage.js';

function App () {
	const [ isLoading, setIsLoading ] = useState(true);
	useEffect(
		() => {
			setTimeout(() => {
				setIsLoading(false);
			}, 3500);
		},
		[ isLoading ]
	);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Fragment>
			<LandingPage />
		</Fragment>
	);
}

export default App;
