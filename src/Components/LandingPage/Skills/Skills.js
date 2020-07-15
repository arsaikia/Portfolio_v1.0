import React, { Fragment } from 'react';
import styled from 'styled-components';

import { FilledStar, EmptyStar } from '../../Icons/Stars';
import { RecatIcon, HTMLIcon, CSSIcon, JSIcon, PythonIcon } from '../../Icons/Skills';

const SkillsContainer = styled.div`
	width: 70vw;
	height: 600px;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;

	@media (max-width: 768px) {
		height: 1300px;
		overflow-y: hidden;
	}
`;

const Header = styled.text`
	display: flex;
	margin: 0px;
`;

const BodyContainer = styled.div`
	width: 80%;
	@media (max-width: 768px) {
		width: 80%;
	}
`;

const Body = styled.text`
	width: 100%;
	height: 100%;
	padding-top: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	font-size: 14px;
	font-weight: bold;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const ItemContainer = styled.div`
	width: 125px;
	height: 206px;
	// background-color: #66b032;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const IconContainer = styled.img`
	width: 90px;
	height: 90px;
	align-self: center;

	// @media (max-width: 768px) {
	// 	width: 160px;
	// 	height: 206px;

	// 	svg {
	// 		width: 160px;
	// 	}
	// }
`;

const Spacing = styled.div`
	width: 100%;
	margin-bottom: ${(props) => props.space}px;

	@media (max-width: 768px) {
		margin-bottom: ${(props) => props.mobileSpace}px;
	}
`;

const SkillName = styled.text`
	text-align: center;

	color: #828282;
`;

const StarContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Stars = ({ fiveStars }) => {
	return fiveStars.map((el) => {
		return el === 1 ? <FilledStar /> : <EmptyStar />;
	});
};

const Skills = () => {
	return (
		<Fragment>
			<SkillsContainer id='skills'>
				<Header>
					<h1>TOP SKILLS</h1>
				</Header>
				<BodyContainer>
					<Body>
						<ItemContainer>
							<RecatIcon width={90} />
							<Spacing space={20} mobileSpace={0} />
							<SkillName>
								<p>ReactJS</p>
							</SkillName>
							<Spacing space={30} mobileSpace={20} />
							<StarContainer>
								<Stars fiveStars={[ 1, 1, 1, 1, 0 ]} />
							</StarContainer>
							<Spacing space={0} mobileSpace={50} />
						</ItemContainer>

						<ItemContainer>
							<JSIcon width={90} />
							<Spacing space={20} mobileSpace={20} />
							<SkillName>
								<p>JS</p>
							</SkillName>
							<Spacing space={30} mobileSpace={30} />
							<StarContainer>
								<Stars fiveStars={[ 1, 1, 1, 0, 0 ]} />
							</StarContainer>
							<Spacing space={0} mobileSpace={50} />
						</ItemContainer>

						<ItemContainer>
							<PythonIcon width={100} />
							<Spacing space={20} mobileSpace={20} />
							<SkillName>
								<p>Python</p>
							</SkillName>
							<Spacing space={30} mobileSpace={30} />
							<StarContainer>
								<Stars fiveStars={[ 1, 1, 1, 1, 0 ]} />
							</StarContainer>
							<Spacing space={0} mobileSpace={50} />
						</ItemContainer>

						<ItemContainer>
							<HTMLIcon width={70} />
							<Spacing space={20} mobileSpace={20} />
							<SkillName>
								<p>HTML5</p>
							</SkillName>
							<Spacing space={30} mobileSpace={30} />
							<StarContainer>
								<Stars fiveStars={[ 1, 1, 1, 1, 0 ]} />
							</StarContainer>
							<Spacing space={0} mobileSpace={50} />
						</ItemContainer>

						<ItemContainer>
							<CSSIcon width={100} />
							<Spacing space={20} mobileSpace={20} />
							<SkillName>
								<p>CSS3</p>
							</SkillName>
							<Spacing space={30} mobileSpace={30} />
							<StarContainer>
								<Stars fiveStars={[ 1, 1, 1, 0, 0 ]} />
							</StarContainer>
							<Spacing space={0} mobileSpace={50} />
						</ItemContainer>
					</Body>
				</BodyContainer>
			</SkillsContainer>
		</Fragment>
	);
};

export default Skills;
