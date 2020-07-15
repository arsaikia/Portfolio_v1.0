import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

const Spacing = styled.div`
	width: 100%;
	margin-bottom: ${(props) => props.space}px;

	@media (max-width: 768px) {
		margin-bottom: ${(props) => props.mobileSpace}px;
	}
`;

const ProjectsContainer = styled.div`
	width: 100%;
	height: 3900px;
	background-color: #f6f6f6;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		overflow-y: hidden;
	}
`;

const Header = styled.text`
	display: flex;
	margin-top: 115px;
	margin-bottom: 47px;
	color: #070707;
`;

const ProjectCard = styled.div`
	width: 49vw;
	height: 49vh;
	background-color: ${(props) => props.colorX};
	cursor: pointer;
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		width: 600px;
		height: 250px;
	}

	@media (max-width: 450px) {
		width: 370px;
		height: 180px;
	}
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ProjectDescriptionContainer = styled.div`
	max-width: 936.24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	@media (max-width: 1155px) {
		width: 84%;
	}
	@media (max-width: 768px) {
		width: 84%;
	}
`;

const ProjectTextHeader = styled.text`
	width : 100%
	display : flex;
	text-align: center;
	font-size: 18px;
	line-height: 22px;
	align-contents: center;
	text-decoration-line: underline;
`;

const ProjectTextBody = styled.text`
	width : 100%
	display : flex;	
	flex-direction: row;
	text-align: justify;
	font-family: GilroyBold;
	font-size: 14px;
	line-height: 17px;
	text-align: center;

`;

const Projects = () => {
	const pictures = {
		project1 : [ process.env.PUBLIC_URL + '/Project1.png', process.env.PUBLIC_URL + '/Project1_gif.gif' ],
		project2 : [ process.env.PUBLIC_URL + '/Project2.png', process.env.PUBLIC_URL + '/Project2_gif.gif' ],
		project3 : [ process.env.PUBLIC_URL + '/Project3.png', process.env.PUBLIC_URL + '/Project3_gif.gif' ],
		project4 : [ process.env.PUBLIC_URL + '/Project4.png', process.env.PUBLIC_URL + '/Project4_gif.gif' ],
		project5 : [ process.env.PUBLIC_URL + '/Project5.png', process.env.PUBLIC_URL + '/Project5.png' ]
	};

	let img;
	useEffect(() => {
		img = new Image();
		img.src = pictures.project1[1];
		pictures.project1.push(img.src);
	});

	let img1;
	useEffect(() => {
		img1 = new Image();
		img1.src = pictures.project2[1];
		pictures.project2.push(img1.src);
	});

	let img2;
	useEffect(() => {
		img2 = new Image();
		img2.src = pictures.project3[1];
		pictures.project3.push(img2.src);
	});

	let img3;
	useEffect(() => {
		img3 = new Image();
		img3.src = pictures.project4[1];
		pictures.project4.push(img3.src);
	});

	let img4;
	useEffect(() => {
		img4 = new Image();
		img4.src = pictures.project5[1];
		pictures.project5.push(img4.src);
	});

	const [ project1, setproject1 ] = useState(pictures.project1[0]);

	const showGif = (val) => {
		val === 1 ? setproject1(pictures.project1[2]) : setproject1(pictures.project1[0]);
	};

	const [ project2, setproject2 ] = useState(pictures.project2[0]);
	const showGif1 = (val) => {
		val === 1 ? setproject2(pictures.project2[2]) : setproject2(pictures.project2[0]);
	};

	const [ project3, setproject3 ] = useState(pictures.project3[0]);
	const showGif2 = (val) => {
		val === 1 ? setproject3(pictures.project3[2]) : setproject3(pictures.project3[0]);
	};

	const [ project4, setproject4 ] = useState(pictures.project4[0]);
	const showGif3 = (val) => {
		val === 1 ? setproject4(pictures.project4[2]) : setproject4(pictures.project4[0]);
	};

	const [ project5, setproject5 ] = useState(pictures.project5[0]);
	const showGif4 = (val) => {
		val === 1 ? setproject5(pictures.project5[2]) : setproject5(pictures.project5[0]);
	};

	return (
		<Fragment>
			<ProjectsContainer id='Projects'>
				<Header>
					<h1>Some of the Things I've Built</h1>
				</Header>

				<a
					href={'http://manifest-b2c-app.s3-website-us-east-1.amazonaws.com/'}
					target='_blank'
					rel='noopener noreferrer'>
					<ProjectCard onMouseEnter={() => showGif(1)} onMouseLeave={() => showGif(2)}>
						<ProjectImage src={project1} alt='project1..' />
					</ProjectCard>
				</a>
				<Spacing space={10} mobileSpace={8} />
				<ProjectDescriptionContainer>
					<ProjectTextHeader>
						<h3>Manifest Inc. B2C Application</h3>
					</ProjectTextHeader>
					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							Why the American retirement fund transfer is still so paperwork heavy and time consuming. In
							collarboration with University of Chicago, <span>Manifest</span> seeks to digitalize the
							whole process and thus reducig the time required by 80%. <br />
							<br />
						</h4>
						<p style={{ textAlign: 'right', color: '#0a192f', fontSize: '15px', fontStyle: 'bold' }}>
							1.React.js 2.StyledDiv{' '}
						</p>
					</ProjectTextBody>
				</ProjectDescriptionContainer>
				<Spacing space={100} mobileSpace={80} />
				<a
					href={'https://arsaikia.github.io/Pathfinding_Visualizer/'}
					target='_blank'
					rel='noopener noreferrer'>
					<ProjectCard onMouseEnter={() => showGif1(1)} onMouseLeave={() => showGif1(2)}>
						<ProjectImage src={project2} alt='project2..' />
					</ProjectCard>
				</a>
				<Spacing space={10} mobileSpace={8} />
				<ProjectDescriptionContainer>
					<ProjectTextHeader>
						<h3>Pathfinding Algorithms Visualizer</h3>
					</ProjectTextHeader>
					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							What's the most fun way to understand an algorithm ? Visualize it. <i>(Bazinga !)</i>
							&#128526;
							<br />
							<br />
							<span>I present to you the pathfinding visualizer.</span> If you ever wanted to visually see
							how Dijkstra's algorithm works this will surely be helpful.
							<span> Bellman Ford, BFS, DFS and A Star</span> in addition to Dijksta are currently what
							the application can visualize. Additionally you can create walls by clicking on any of the
							blocks, drag the source and destination to wherever you like and adjust the speed of
							animation.
						</h4>
						<p style={{ textAlign: 'right', color: '#0a192f', fontSize: '15px', fontStyle: 'bold' }}>
							1.React.js 2.MaterialUI 3.StyledDiv{' '}
						</p>
					</ProjectTextBody>
				</ProjectDescriptionContainer>
				<Spacing space={100} mobileSpace={80} />

				<a href={'https://blooming-retreat-21627.herokuapp.com/'} target='_blank' rel='noopener noreferrer'>
					<ProjectCard onMouseEnter={() => showGif2(1)} onMouseLeave={() => showGif2(2)}>
						<ProjectImage src={project3} alt='project3..' />
					</ProjectCard>
				</a>
				<Spacing space={10} mobileSpace={8} />
				<ProjectDescriptionContainer>
					<ProjectTextHeader>
						<h3>MERN Stack Contact Keeper</h3>
					</ProjectTextHeader>
					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							<span>Contact Keeper</span> is a MERN Stack application that can be used to add, edit or
							delete your personal and professional contacts. <br />
							<br />
							The Application uses json web-token to securely transmit user sensitive information. Every
							user's information is only accessble to only that user.
						</h4>
						<p style={{ textAlign: 'right', color: '#0a192f', fontSize: '15px', fontStyle: 'bold' }}>
							1.React.js 2.Nodejs 3.Express 4.MongoDB 5.JSON Web-token 6.Heroku
						</p>
					</ProjectTextBody>
				</ProjectDescriptionContainer>
				<Spacing space={100} mobileSpace={80} />

				<a href={'https://arsaikia.github.io/AlgorithmVisualizer/'} target='_blank' rel='noopener noreferrer'>
					<ProjectCard onMouseEnter={() => showGif3(1)} onMouseLeave={() => showGif3(2)}>
						<ProjectImage src={project4} alt='project4..' />
					</ProjectCard>
				</a>
				<Spacing space={10} mobileSpace={8} />
				<ProjectDescriptionContainer>
					<ProjectTextHeader>
						<h3>Sorting Algorithm Visualizer</h3>
					</ProjectTextHeader>
					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							Defined a ReactJS based web application that takes the user through their journey of
							transfering 401k funds.<br />
							<br />
							<span>Consectetur aliquip occaecat</span> laborum reprehenderit magna voluptate eu proident
							irure. Tempor adipisicing magna aute Lorem ullamco ad do duis dolore. Quis culpa adipisicing
							veniam laborum deserunt deserunt nulla enim. Exercitation esse officia mollit mollit sint.
							Enim amet dolore labore ea commodo mollit consequat deserunt minim do. <br />
							<br />
							<span>Consectetur aliquip occaecat</span> Aute quis cupidatat aute esse do incididunt sint
							tempor id mollit nulla. Aliqua nulla anim mollit exercitation qui quis et laboris fugiat
							cillum minim.Esse nulla reprehenderit et laboris consequat sunt officia elit occaecat. Elit
							velit mollit ipsum mollit. Duis tempor aliqua duis consectetur non enim labore cupidatat
							dolor. Labore ut fugiat nisi laboris velit. Enim sint aliquip aliquip minim et cillum dolore
							nostrud laborum non anim aliqua. Laboris aliqua labore non deserunt voluptate qui eu
							voluptate consequat fugiat magna. Magna id in dolore Lorem aliqua duis elit.
						</h4>
						<p style={{ textAlign: 'right', color: '#0a192f', fontSize: '15px', fontStyle: 'bold' }}>
							1.React.js 2.MaterialUI 3.StyledDiv{' '}
						</p>
					</ProjectTextBody>
				</ProjectDescriptionContainer>

				<ProjectDescriptionContainer>
					<ProjectTextHeader>
						<h3>Other Noteworthy Projects</h3>
					</ProjectTextHeader>
					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							<a
								href={'https://github.com/arsaikia/E-commerceApp/blob/master/Report.pdf'}
								target='_blank'
								rel='noopener noreferrer'>
								<h6>E-Commerce Clone</h6>
							</a>
							<br />
							laborum reprehenderit magna voluptate eu proident irure. Tempor adipisicing magna aute Lorem
							ullamco ad do duis dolore. Quis culpa adipisicing veniam laborum deserunt deserunt nulla
							enim. Exercitation esse officia mollit mollit sint. Enim amet dolore labore ea commodo
							mollit consequat deserunt minim do. <br />
							<br />
						</h4>
					</ProjectTextBody>

					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							<a
								href={
									'https://github.com/arsaikia/MLND_Capstone_Human_Activity_Recognition_Using_Smartphones_Sensor_Data'
								}
								target='_blank'
								rel='noopener noreferrer'>
								<h6>
									To find an Optimum Machine Learning Model for Human Activity Recognition Using
									Smartphones
								</h6>
							</a>
							<br />
							laborum reprehenderit magna voluptate eu proident irure. Tempor adipisicing magna aute Lorem
							ullamco ad do duis dolore. Quis culpa adipisicing veniam laborum deserunt deserunt nulla
							enim. Exercitation esse officia mollit mollit sint. Enim amet dolore labore ea commodo
							mollit consequat deserunt minim do. <br />
							<br />
						</h4>
					</ProjectTextBody>
				</ProjectDescriptionContainer>

				{/*  */}
			</ProjectsContainer>
		</Fragment>
	);
};

export default Projects;
