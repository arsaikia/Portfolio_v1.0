import React, { useState, Fragment, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import AboutMe from '../LandingPage/AboutMe/AboutMe';
import Skills from '../LandingPage/Skills/Skills';
import Projects from '../LandingPage/Projects/Projects';
import Contacts from '../LandingPage/Contacts/Contacts';

import { Hamburger } from '../Icons/CareerJourney';
import { MobileSideNav } from './MobilSideNav/MobileSideNav';

import { backgroundColor, darkBackgroundColor, lightGrey } from '../Context/Colors';

const OuterContainer = styled.div`
	background-color: ${backgroundColor};
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;
`;

const Space = styled.div`
	width: 100%;
	height: ${(props) => props.space}px;
`;

const InnerPlaceholderContainer = styled.div`
	// background-color: #292929;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const InnerContainer = styled.div`
	width: 80vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		height: 100%;
		margin-bottom: 70px;
	}
`;

const NavContainer = styled.div`
	background-color: ${backgroundColor};
	position: fixed;
	height: 8vh;
	width: 100vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavItem = styled.div`
	font-family: '';
	font-size: 18px;
	font-weight: 800;
	line-height: 22px;
	color: ${(props) => (!props.selectedNav ? '#828282' : '#070707')};

	cursor: pointer;
`;

const NavBarBottomLine = styled.div`
	position: relative;
	margin-top: 8vh;
	display: flex;
	width: 100%;
	border: 1px solid #828282;
	background-color: #828282;
	transform: matrix(1, 0, 0, 1, 0, 0);

	@media (max-width: 768px) {
		display: none;
	}
`;

const HeaderContainer = styled.div`
	height: 22vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		height: 25vh;
	}
`;

const HeaderItemLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	height: 150px;
	width: 200px;
	text-align: justify;
	text-align-last: justify;

	font-family: "Gilroy";
	margin: 0px;
	padding: 0px;
	font-weight: 750;
	font-size: 47.3392px;
	line-height: 59px;

	@media (max-width: 768px) {
		margin-top: 65px;
		height: 166px;
		width: 80vw;
		font-size: 67px;
		font-weight: 720;
		line-height: 90px;
		color: #000000;
		margin-bottom: 23px;
		justify-content: space-between;
		// text-align: flex-start;
		// background-color: turquoise;
	}

	@media (max-width: 450px) {
		margin-top: 80px;
		width: 80vw;
		font-size: 57px;
		font-weight: 650;
		line-height: 70px;
		color: #000000;
		margin-bottom: 23px;
		justify-content: space-between;

		// background-color: turquoise;
	}
`;

const LeftHeaderText = styled.text`
	@media (max-width: 768px) {
		// background-color: purple;
		flex: 12;
		height: 166px;
	}

	@media (max-width: 450px) {
		margin-left: auto;
	}
`;

const MobileRight = styled.div`
	display: none;

	margin-top: 135px;
	&:hover {
		opacity: 0.55;
	}
	@media (max-width: 768px) {
		align-self: center;
		display: flex;
		flex: 1;
		margin-bottom: 25vh;

		cursor: pointer;
		transition: 0.5s all ease-out;
		border: none;
		outline: 0;
	}
	@media (max-width: 450px) {
		margin-left: auto;
	}
`;

const HeaderItemCenter = styled.div`
	height: 150px;
	width: 180px;
	display: flex;
	justify-content: center;
	align-self: center;

	@media (max-width: 768px) {
		width: 200px;
		align-self: flex-start;
	}
`;

const HeaderThreeText = styled.text`
	align-self: flex-end;
	color: #070707;

	@media (max-width: 768px) {
		font-size: 25px;
		line-height: 25px;
		font-weight: 500;
		align-items: flex-start;
	}

	@media (max-width: 450px) {
		font-size: 20px;
		line-height: 22px;
		font-weight: 500;
		align-items: flex-start;
	}
`;

const HeaderItemRight = styled.div`
	width: 150px;
	padding-top: 130px;
	font-weight: bold;
	display: flex;
	flex-dorection: row;

	transform: rotate(270deg);

	@media (max-width: 768px) {
		display: none;
		transform: rotate(0);
		margin-right: 40%;
	}
`;

const Button = styled.div`
	cursor: pointer;
	padding-left: 5px;
	padding-right: 5px;
	background-color: ${(props) => props && props.bg};
	color: ${(props) => props && props.color};
	border-radius: 5px;
	hover {
		opacity: 0.65;
	}
`;

const ImageContainer = styled.div`
	height: 60vh;

	margin-top: 10px;

	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		margin-top: 137px;
		height: 56vh;
	}

	@media (max-width: 450px) {
		height: 40vh;
	}
`;
const ProfileImage = styled.img`
	max-width: 100%;
	height: auto;
	width: auto;
`;

const LandingPage = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const scrollTo = (to) => {
		scroll.scrollTo(to);
	};

	// Theme Under Construction
	const [ underConstruction, setUnderConstruction ] = useState(false);

	// Change Navbar color
	const [ selectedNav, setSelectedNav ] = useState('Home');
	const [ showHamburgerMenu, setShowHamburgerMenu ] = useState(false);
	const [ avatarImage, setAvatarImage ] = useState('/demo.png');

	const navHandler = (text) => {
		console.log('Text', text);
		setSelectedNav(text);
		setShowHamburgerMenu(false);
	};

	const HomeClickHandler = (e) => {
		navHandler(e.target.innerText);
		scrollToTop();
	};

	/********************************************************/
	// let jmediaquery = window.matchMedia('(min-width: 768px)');
	// useEffect(() => {
	// 	jmediaquery = window.matchMedia('(min-width: 768px)');
	// });
	// useEffect(
	// 	() => {
	// 		if (jmediaquery.matches) {
	// 			return setAvatarImage('/demo.png');
	// 		}
	// 		else{
	// 			return setAvatarImage('/demo1.png');
	// 		}
	// 	},
	// 	[ [], jmediaquery ]
	// );

	/********************************************************/

	return (
		<Fragment>
			{showHamburgerMenu && (
				<MobileSideNav
					selectedNav={selectedNav}
					navHandler={navHandler}
					setShowHamburgerMenu={setShowHamburgerMenu}
					scrollTo={scrollTo}
				/>
			)}
			{
				<OuterContainer>
					<NavContainer>
						<NavItem selectedNav={selectedNav === ''} />
						<NavItem selectedNav={selectedNav === 'Home'}>
							<Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>
								<p onClick={(e) => HomeClickHandler(e)} value={'Home'}>
									Home
								</p>
							</Link>
						</NavItem>

						<NavItem selectedNav={selectedNav === 'About'}>
							<Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={800}>
								<p onClick={(e) => navHandler(e.target.innerText)} value={'About'}>
									About
								</p>
							</Link>
						</NavItem>
						<NavItem selectedNav={selectedNav === 'Skills'}>
							<Link
								activeClass='active'
								to='skills'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1200}>
								<p onClick={(e) => navHandler(e.target.innerText)} value={'Skills'}>
									Skills
								</p>
							</Link>
						</NavItem>
						<NavItem selectedNav={selectedNav === 'Projects'}>
							<Link
								activeClass='active'
								to='Projects'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1500}>
								<p onClick={(e) => navHandler(e.target.innerText)} value={'Projects'}>
									Projects
								</p>
							</Link>
						</NavItem>
						<NavItem selectedNav={selectedNav === 'Contact'}>
							<Link
								activeClass='active'
								to='contacts'
								spy={true}
								smooth={true}
								offset={-70}
								duration={2000}>
								<p onClick={(e) => navHandler(e.target.innerText)} value={'Contact'}>
									Contact
								</p>
							</Link>
						</NavItem>
						<NavItem selectedNav={selectedNav === ''} />
					</NavContainer>
					<InnerPlaceholderContainer>
						<InnerContainer>
							<NavBarBottomLine />
							<HeaderContainer>
								<HeaderItemLeft>
									<LeftHeaderText>
										Arunabh<br /> Saikia
									</LeftHeaderText>

									<MobileRight onClick={() => setShowHamburgerMenu(true)}>
										<Hamburger />
									</MobileRight>
								</HeaderItemLeft>

								<HeaderItemCenter>
									<HeaderThreeText>
										<p>UI | Full Stack developer, Chicago</p>
									</HeaderThreeText>
								</HeaderItemCenter>

								<HeaderItemRight>
									<Button
										bg={'#cdcdcd'}
										color={'black'}
										onClick={() => {
											setUnderConstruction((underConstruction) => !underConstruction);
										}}>
										<p>{'LIGHT '} </p>
									</Button>
									{/* <p>{' | '}</p> */}
									<Button
										bg={'#0a192f'}
										color={'#ccd6f6'}
										onClick={() => {
											setUnderConstruction((underConstruction) => !underConstruction);
										}}>
										<p> {' DARK'}</p>
									</Button>
								</HeaderItemRight>
							</HeaderContainer>

							<ImageContainer>
								{/* The below span is for theme under construction message over imaege */}
								<span
									style={{
										display  : !underConstruction && 'none',
										position : 'absolute',
										padding  : '5px'
									}}>
									Theme Under Construction
								</span>
								<ProfileImage src={process.env.PUBLIC_URL + avatarImage} alt='Frame' />
							</ImageContainer>
						</InnerContainer>
					</InnerPlaceholderContainer>
					<AboutMe />
					<Space space={100} />
					<Skills />
					<Space space={100} />
					<Projects />
					<Contacts />

					{/* Dummy Footer */}
					<img
						style={{
							width        : '50px',
							height       : '50px',
							marginLeft   : '90%',
							borderRadius : '50px',
							cursor       : 'pointer',
							marginBottom : '20px'
						}}
						src={process.env.PUBLIC_URL + '/toTop.gif'}
						al={''}
						onClick={scrollToTop}
					/>
					<Space />
					{/* Dummy Footer */}
				</OuterContainer>
			}
		</Fragment>
	);
};

export default LandingPage;
