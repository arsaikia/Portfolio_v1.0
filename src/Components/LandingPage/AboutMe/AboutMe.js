import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import { Dot } from '../../Icons/CareerJourney';

const AboutMeContainer = styled.div`
	width: 100%;
	padding-top: 120px;
	min-height: 1600px;
	background-color: #f6f6f6;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	overflow: hidden;

	@media (max-width: 768px) {
		min-height: 1800px;
	}
	@media (max-width: 450px) {
		padding-top: 70px;
		min-height: 2050px;
		border-radius: 5px;
		box-shadow: 4px 4px 4px #e1e1e1;
		z-index: 1;
		position: relative;
	}
`;

const Header = styled.text`
	display: flex;
	font-family: 'GilroyBold';
	font-size: 26px;
	font-weight: bold;
	line-height: 24px;
	color: #070707;
`;

const Body = styled.text`
	max-width: 700px;
	padding-top: 50px;
	padding-bottom: 30px;
	display: flex;

	font-family: '';
	font-size: 18px;
	line-height: 22px;
	text-align: justify;
	color: #070707;

	@media (max-width: 768px) {
		width: 70vw;
	}

	@media (max-width: 450px) {
		width: 85vw;
	}
`;

const CareerJourney = styled.div`
	display: flex;
	width: 500px;
	justify-content: flex-start;
	margin-top: 30px;
	flex-direction: column;
	align-items: center;

	height: 500px;
	// background-color: turquoise;

	@media (max-width: 768px) {
		width: 70vw;
	}
`;

const LineContainer = styled.div`
	width: 3px;
	height: 95px;
	background-color: ${(props) => (props.bg ? props.bg : '#070707')};
	border-radius: 2px;
	@media (max-width: 768px) {
		height: 115px;
	}

	@media (max-width: 450px) {
		height: 125px;
	}
`;

const OnceCareer = styled.div`
	display: flex;
	flex-directin: row;

	height: 200px;
	align-items: flex-start;
	justify-content: space-between;
	cursor: 'pointer';

	@media (max-width: 768px) {
		height: 250px;
	}
`;

const CareerLeft = styled.div`
	display: flex;
	width: 150px;
	flex-direction: column;
	align-items: center;

	padding-left: 0px;
	width: 15%;
`;

const CareerRight = styled.text`
	padding-left: 20px;
	padding-right: 10px;
	height: 220px;
	width: 600px;
	text-align: justify;
	align-self: center;
	align-content: flex-end;

	// background-color: turquoise;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-left: auto;
	cursor: pointer;

	@media (max-width: 1080px) {
		height: 200px;
	}

	@media (max-width: 768px) {
		width: 70vw;
		height: 230px;
	}

	@media (max-width: 450px) {
		width: 70vw;
		height: 240px;
	}
`;

const CareerDescription = styled.div`
	padding-left: 20px;
	padding-right: 10px;
	width: 600px;
	text-align: justify;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	align-items: center;

	height: 220px;
	background-color: #ffffff;
	border-radius: 2vw;

	box-shadow: 4px 4px 4px #e1e1e1;
	z-index: 1;
	position: relative;

	@media (max-width: 1080px) {
		height: 200px;
	}

	@media (max-width: 768px) {
		width: 70vw;
		height: 240px;
	}

	@media (max-width: 450px) {
		font-size: 10px;
		// line-height: 10px;
		font-weight: 600;
	}
`;

const JobDescriptionText = styled.text`
	font-family: "Gilroy";
	font-size: 15px;
	line-height: 14px;
	font-weight: 500;
	color: #828282;

	display: flex;
	justify-content: flex-start;

	@media (max-width: 450px) {
		font-size: 10px;
		// line-height: 10px;
		font-weight: 600;
	}
`;

const JobDuration = styled.text`
	font-family: "Gilroy";
	font-size: 15px;
	line-height: 14px;
	font-weight: 500;
	color: #828282;
	font-style: italic;
	display: flex;
	justify-content: flex-start;
`;

const HoverContainer = styled.text`
	font-family: "Gilroy";
	font-size: 12px;
	line-height: 12px;
	font-weight: 500;
	color: #4e78f7;
	font-style: italic;
`;

const AboutMe = () => {
	const [ hoverShow, sethoverShow ] = useState(true);
	const [ pin, setPin ] = useState(false);
	const [ showTile, setShowTile ] = useState({
		manifest : false,
		iit      : false,
		udacity  : false,
		ibm      : false,
		jec      : false
	});
	const manifestHandler = (val) => {
		sethoverShow(false);
		switch (val) {
			case 'manifest':
				setShowTile({ manifest: true });
				break;

			case 'iit':
				setShowTile({ iit: true });
				break;

			case 'udacity':
				setShowTile({ udacity: true });
				break;

			case 'ibm':
				setShowTile({ ibm: true });
				break;

			case 'jec':
				setShowTile({ jec: true });
				break;

			default:
				setShowTile({
					manifest : false,
					iit      : false,
					udacity  : false,
					ibm      : false,
					jec      : false
				});
		}
	};
	return (
		<Fragment>
			<AboutMeContainer id='about'>
				<Header>
					<h1>About Me</h1>
				</Header>
				<Body>
					<p>
						Hello! I'm Arunabh, a software engineer with 4 years of work experience currently based in
						Chicago.
						<br />
						<br />
						I enjoy building things that live on the internet, whether that be websites, applications, or
						anything in between. My goal is to always build products that provide pixel-perfect, performant
						experiences.
						<br />
						<br />
						<br />
						<br />
						Shortly after graduating from{' '}
						<span>
							<a
								href={'https://jecassam.ac.in/'}
								target='_blank'
								style={{
									textDecoration : 'none',
									color          : 'inherit',
									cursor         : 'pointer',
									display        : 'inline'
								}}>
								Jorhat Engineering College
							</a>
						</span>, I joined the engineering team at IBM India where I worked on a wide variety of
						interesting and meaningful projects on a daily basis. The technologies I worked with involved
						primarily Java and python using object oriented methodologies in Microservices architecture.{' '}
						<br />
						After completing my first year of Graduate studies at Illinois Tech, Chicago I am currently
						working as a Front-end React developer at{' '}
						<span>
							<a
								href={'https://www.manifestledger.com/'}
								target='_blank'
								style={{
									textDecoration : 'none',
									color          : 'inherit',
									cursor         : 'pointer',
									display        : 'inline'
								}}>
								Manifest HQ inc.
							</a>
						</span>
					</p>
				</Body>
				{/* Career: Manifest */}
				<CareerJourney>
					<OnceCareer>
						<CareerLeft>
							<LineContainer bg={'#f6f6f6'} />
							<Dot />
							<LineContainer />
						</CareerLeft>
						{showTile.manifest ? (
							<CareerDescription
								onMouseLeave={() => !pin && manifestHandler('')}
								onBlur={() => setPin(false)}
								onClick={() => {
									setPin(true);
								}}>
								<p style={{ paddingTop: '15px' }}>
									Front End Developer <span>@Manifest</span>
								</p>
								<ul style={{ listStyleType: 'triangle' }}>
									<li>
										<JobDescriptionText>
											Write modern, performant, maintainable code for a diverse array of client
											and internal projects
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Work with a variety of different languages, platforms, frameworks, and
											content management systems such as JavaScript, TypeScript, Gatsby, React,
											Craft, Wordpress, Prismic, and Netlify
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Communicate with multi-disciplinary teams of engineers, designers,
											producers, and clients on a daily basis.
										</JobDescriptionText>
									</li>
								</ul>
							</CareerDescription>
						) : (
							<CareerRight onMouseEnter={() => manifestHandler('manifest')}>
								<span
									style={{
										cursor  : 'pointer',
										display : 'inline'
									}}>
									MANIFEST :{' '}
								</span>{' '}
								Front-End React Developer Intern at Manifest HQ Inc. , Chicago
								<br />
								<br />
								<JobDuration>May 2020 - August 2020</JobDuration>
								<br />
								<HoverContainer style={{ display: hoverShow === false && 'none' }}>
									Hover to peek.{' '}
								</HoverContainer>
							</CareerRight>
						)}
					</OnceCareer>
					{/* Career: IIT */}
					<OnceCareer>
						<CareerLeft>
							<LineContainer />

							<Dot />
							<LineContainer />
						</CareerLeft>
						{showTile.iit ? (
							<CareerDescription
								onMouseLeave={() => !pin && manifestHandler('')}
								onClick={() => {
									setPin(true);
								}}>
								<p style={{ paddingTop: '15px' }}>
									MS in CS <span>@IIT Chicago</span>
								</p>
								<ul style={{ listStyleType: 'triangle' }}>
									<li>
										<JobDescriptionText>
											Write modern, performant, maintainable code for a diverse array of client
											and internal projects
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Work with a variety of different languages, platforms, frameworks, and
											content management systems such as JavaScript, TypeScript, Gatsby, React,
											Craft, Wordpress, Prismic, and Netlify
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Communicate with multi-disciplinary teams of engineers, designers,
											producers, and clients on a daily basis.
										</JobDescriptionText>
									</li>
								</ul>
							</CareerDescription>
						) : (
							<CareerRight onMouseEnter={() => manifestHandler('iit')}>
								<span>IIT CHICAGO :</span> M.S. in CS at Illinois Institute of Technology, Chicago, USA.
								<br />
								<br />
								<JobDuration>Aug 2019 - May 2021</JobDuration>
								<br />
								<HoverContainer style={{ display: pin === true && 'none' }}>
									Click to pin card.
								</HoverContainer>
							</CareerRight>
						)}
					</OnceCareer>
					{/* Career: udacity */}
					<OnceCareer>
						<CareerLeft>
							<LineContainer />

							<Dot />
							<LineContainer />
						</CareerLeft>
						{showTile.udacity ? (
							<CareerDescription
								onMouseLeave={() => !pin && manifestHandler('')}
								onClick={() => {
									setPin(true);
								}}>
								<p style={{ paddingTop: '15px' }}>
									Project Reviewer and Mentor <span>@Udacity</span>
								</p>
								<ul style={{ listStyleType: 'triangle' }}>
									<li>
										<JobDescriptionText>
											Write modern, performant, maintainable code for a diverse array of client
											and internal projects
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Work with a variety of different languages, platforms, frameworks, and
											content management systems such as JavaScript, TypeScript, Gatsby, React,
											Craft, Wordpress, Prismic, and Netlify
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Communicate with multi-disciplinary teams of engineers, designers,
											producers, and clients on a daily basis.
										</JobDescriptionText>
									</li>
								</ul>
							</CareerDescription>
						) : (
							<CareerRight onMouseEnter={() => manifestHandler('udacity')}>
								<span>UDACITY : </span> MLND Project Reviewer and Mentor. 1.5 years’ experience of
								reviewing projects in Machine Learning Engineer Nanodegree.
								<br />
								<br />
								<JobDuration>Feb 2017 - May 2019</JobDuration>
							</CareerRight>
						)}
					</OnceCareer>

					{/* Career: ibm */}
					<OnceCareer>
						<CareerLeft>
							<LineContainer />

							<Dot />
							<LineContainer />
						</CareerLeft>
						{showTile.ibm ? (
							<CareerDescription
								onMouseLeave={() => !pin && manifestHandler('')}
								onClick={() => {
									setPin(true);
								}}>
								<p style={{ paddingTop: '15px' }}>
									Software Developer <span>@IBM</span>
								</p>
								<ul style={{ listStyleType: 'triangle' }}>
									<li>
										<JobDescriptionText>
											Write modern, performant, maintainable code for a diverse array of client
											and internal projects
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Work with a variety of different languages, platforms, frameworks, and
											content management systems such as JavaScript, TypeScript, Gatsby, React,
											Craft, Wordpress, Prismic, and Netlify
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Communicate with multi-disciplinary teams of engineers, designers,
											producers, and clients on a daily basis.
										</JobDescriptionText>
									</li>
								</ul>
							</CareerDescription>
						) : (
							<CareerRight onMouseEnter={() => manifestHandler('ibm')}>
								<span>IBM :</span> Software Developer in Python and Java using Micro-Services
								architecture and Object-Oriented design.
								<br />
								<br />
								<JobDuration>Mar 2016 - May 2019</JobDuration>
							</CareerRight>
						)}
					</OnceCareer>
					{/* Career: jec */}
					<OnceCareer>
						<CareerLeft>
							<LineContainer />
							<Dot />

							<LineContainer bg={'#f6f6f6'} />
						</CareerLeft>
						{showTile.jec ? (
							<CareerDescription
								onMouseLeave={() => !pin && manifestHandler('')}
								onClick={() => {
									setPin(true);
								}}>
								<p style={{ paddingTop: '15px' }}>
									Undergraduate <span> @Jorhat Engineering College</span>
								</p>
								<ul style={{ listStyleType: 'triangle' }}>
									<li>
										<JobDescriptionText>
											Write modern, performant, maintainable code for a diverse array of client
											and internal projects
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Work with a variety of different languages, platforms, frameworks, and
											content management systems such as JavaScript, TypeScript, Gatsby, React,
											Craft, Wordpress, Prismic, and Netlify
										</JobDescriptionText>
									</li>
									<li>
										<JobDescriptionText>
											Communicate with multi-disciplinary teams of engineers, designers,
											producers, and clients on a daily basis.
										</JobDescriptionText>
									</li>
								</ul>
							</CareerDescription>
						) : (
							<CareerRight CareerRight onMouseEnter={() => manifestHandler('jec')}>
								<span>UNDERGRAD :</span> Undrgrad from Jorhat Engineering College, Assam, India.
								<br />
								<br />
								<JobDuration>July 2011 - Aug 2015</JobDuration>
							</CareerRight>
						)}
					</OnceCareer>
				</CareerJourney>
			</AboutMeContainer>
		</Fragment>
	);
};

export default AboutMe;
