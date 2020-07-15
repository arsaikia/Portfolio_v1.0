import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Element } from 'react-scroll';

import { Cross } from '../../Icons/MobileSideNav';

const OuterContainer = styled.div`
	display: none;
	width: 100vw;
	height: 100vh;
	@media (max-width: 768px) {
		display: flex;
		opacity: 1;
	}
`;

const Left = styled.div`
	@media (max-width: 768px) {
		flex: 6;
		// background-color: turquoise;

		display: flex;
		flex-direction: column;
		padding-top: 66px;
		padding-left: 10vw;
	}
`;

const MenuItem = styled.div`
	@media (max-width: 768px) {
		height: 42px;
		width: 170px;
		// background-color: red;
		margin-bottom: 68px;
        
		cursor: pointer;

		// color: ${(props) => (props.selectedNav ? '#828282' : '#070707')};
	}
`;

const TextContainer = styled.text`
	font-family: Gilroy;
	font-size: 34px;
	line-height: 42px;
	font-weight: 700;
	text-align: left;

	color: ${(props) => (!props.selectedNav ? '#828282' : '#070707')};
`;

const Right = styled.div`
	@media (max-width: 768px) {
		flex: 1;
		// background-color: purple;
		display: flex;
		flex-direction: column;

		justify-content: space-between;
	}
`;

const RightCross = styled.div`
@media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-top: 66px;
    flex-1;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
		opacity: 0.65;
    }
    cursor: pointer;
		transition: 0.5s all ease-out;
		border: none;
		outline: 0;
}
`;

const Badge = styled.div`
@media (max-width: 768px) {
    
    background-color: purple;
    flex-1;

    width: 50px;
    height: 150px;

    margin-bottom: 66px;

    display: flex;
    align-items: center;
    justify-content: center;
}
`;

const MobileSideNav = ({ setShowHamburgerMenu, selectedNav, navHandler }) => {
	console.log('selectedNav', selectedNav);
	return (
		<Fragment>
			<OuterContainer>
				<Left>
					<Link activeClass='active' to='home' spy={true} smooth={true} offset={-900} duration={800}>
						<MenuItem>
							<TextContainer
								selectedNav={selectedNav === 'Home'}
								onClick={(e) => navHandler(e.target.innerText)}
								value={'Home'}>
								Home
							</TextContainer>
						</MenuItem>
					</Link>

					<Link activeClass='active' to='about' spy={true} smooth={true} offset={-900} duration={800}>
						<MenuItem>
							<TextContainer
								selectedNav={selectedNav === 'About'}
								onClick={(e) => navHandler(e.target.innerText)}
								value={'About'}>
								About
							</TextContainer>
						</MenuItem>
					</Link>
					<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-900} duration={1200}>
						<MenuItem>
							<TextContainer
								selectedNav={selectedNav === 'Skills'}
								onClick={(e) => navHandler(e.target.innerText)}
								value={'About'}>
								Skills
							</TextContainer>
						</MenuItem>
					</Link>
					<Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-900} duration={1600}>
						<MenuItem>
							<TextContainer
								selectedNav={selectedNav === 'Projects'}
								onClick={(e) => navHandler(e.target.innerText)}
								value={'About'}>
								Projects
							</TextContainer>
						</MenuItem>
					</Link>
					<Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-700} duration={2200}>
						<MenuItem>
							<TextContainer
								selectedNav={selectedNav === 'Contact'}
								onClick={(e) => navHandler(e.target.innerText)}
								value={'About'}>
								Contact
							</TextContainer>
						</MenuItem>
					</Link>
				</Left>
				<Right>
					<RightCross
						onClick={() => {
							setShowHamburgerMenu(false);
						}}>
						<Cross />
					</RightCross>
					<Badge />
				</Right>
			</OuterContainer>
		</Fragment>
	);
};

export { MobileSideNav };
