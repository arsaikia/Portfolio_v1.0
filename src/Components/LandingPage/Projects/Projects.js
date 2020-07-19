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
	min-height: 4000px;
	padding-bottom: 50px;
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

const OtherProjectsContainer = styled.div`
	margin-top: 20px;
	width: 936.24px;
	height: 550px;

	display: grid;

	// padding: 50px;
	grid-template-columns: repeat(2, 1fr);
	// grid-gap: 20px;
	grid-auto-rows: minmax(100px, auto);

	// background-color: turquoise;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		width: 100%;
		height: 1250px;
	}
`;

const GridColumn1 = styled.div`
	margin: 10px;
	grid-column: 1;
	grid-row: 1;
	background-color: #ffffff;
	border-radius: 2vw;
	border: 2px solid #e8e8e8;

	box-shadow: 4px 4px 4px #e1e1e1;
	z-index: 1;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	@media (max-width: 768px) {
		margin: 60px 80px 0px 80px;
		grid-column: 1;
		grid-row: 1;
	}

	&:hover {
		background-color: #292929;
		opacity: .85;
		text {
			color: #ffff;
	}

	background-color: #292929;
		opacity: .85;
		color: #ffff;
`;
const GridColumn2 = styled.div`
	margin: 10px;
	grid-column: 2;
	grid-row: 1;
	background-color: #ffffff;
	border-radius: 2vw;
	border: 2px solid #e8e8e8;

	box-shadow: 4px 4px 4px #e1e1e1;
	z-index: 1;
	position: relative;

	@media (max-width: 768px) {
		margin: 60px 80px 0px 80px;
		grid-column: 1;
		grid-row: 2;
	}
	cursor: pointer;
	&:hover {
		background-color: #292929;
		opacity: .85;
		text {
			color: #ffff;
	}
`;
const GridColumn3 = styled.div`
	margin: 10px;
	grid-column: 1;
	grid-row: 2;
	background-color: #ffffff;
	border-radius: 2vw;
	border: 2px solid #e8e8e8;

	box-shadow: 4px 4px 4px #e1e1e1;
	z-index: 1;
	position: relative;
	@media (max-width: 768px) {
		margin: 60px 80px 0px 80px;
		grid-column: 1;
		grid-row: 3;
	}
	cursor: pointer;
	&:hover {
		background-color: #292929;
		opacity: .85;
		text {
			color: #ffff;
	}
`;
const GridColumn4 = styled.div`
	margin: 10px;
	grid-column: 2;
	grid-row: 2;
	background-color: #ffffff;
	border-radius: 2vw;
	border: 2px solid #e8e8e8;

	box-shadow: 4px 4px 4px #e1e1e1;
	z-index: 1;
	position: relative;

	@media (max-width: 768px) {
		margin: 60px 80px 60px 80px;
		grid-column: 1;
		grid-row: 4;
	}
	cursor: pointer;
	&:hover {
		background-color: #292929;
		opacity: .85;
		text {
			color: #ffff;
	}
`;

const DescriptionText = styled.text`
	font-family: "Gilroy";
	font-size: 15px;
	line-height: 14px;
	font-weight: 500;
	color: #828282;
	margin: 30px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media (max-width: 450px) {
		font-size: 10px;
		// line-height: 10px;
		font-weight: 600;
	}
	cursor: pointer;
	&:hover {
		background-color: #292929;
		opacity: .85;
		text {
			color: #ffff;
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
						<h3>Manifest Inc. Client Portal</h3>
					</ProjectTextHeader>
					<Spacing space={10} mobileSpace={8} />
					<ProjectTextBody>
						<h4>
							It's 2020, but why is the American 401k fund transfer still so paperwork heavy and time
							consuming? In collarboration with University of Chicago, this is the specific problem{' '}
							<span>Manifest</span> solves by digitizing the whole process and thus reducig the transfer
							time by 80%. <br />
							<br />
						</h4>
						<p
							style={{
								textAlign  : 'right',
								color      : 'rgba(41,41,41, .85)',
								fontSize   : '15px',
								fontWeight : 'bold'
							}}>
							| React.js | StyledDiv | Hooks | Styled Components | Jest | Enzyme | {' '}
						</p>
					</ProjectTextBody>
				</ProjectDescriptionContainer>
				<Spacing space={100} mobileSpace={80} />
				<a href={'https://arsaikia.tech/'} target='_blank' rel='noopener noreferrer'>
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
							I present to you the pathfinding visualizer. If you ever wanted to visually see how
							Dijkstra's algorithm works this will surely be helpful.
							<span> Bellman Ford, BFS, DFS </span>and<span> A Star</span> in addition to{' '}
							<span>Dijksta</span> are currently what the application can visualize. Additionally you can
							create walls by clicking on any of the blocks, drag the source and destination to wherever
							you like and adjust the speed of animation.
						</h4>
						<p
							style={{
								textAlign  : 'right',
								color      : 'rgba(41,41,41, .85)',
								fontSize   : '15px',
								fontWeight : 'bold'
							}}>
							| React.js | MaterialUI | Sass | Netlify |
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
							<span>Contact Keeper</span> is a full stack MERN where a user can register/login to see
							their contacts. Each user can only access their saved data. In addition to adding user have
							the functionality to update, delete or filter from their contacts list. State management is
							handled using Context API and useReducer hooks while JSON Web Token is used for
							authentication and data transimission through protected routes. <br />
							<br />
							The UI interacts with the backend using the 10 available REST API's built with express.js
							while the data is stored in MoboDB Atlas.
						</h4>
						<p
							style={{
								textAlign  : 'right',
								color      : 'rgba(41,41,41, .85)',
								fontSize   : '15px',
								fontWeight : 'bold'
							}}>
							| React.js | Nodejs | Express | MongoDB Atlas | JWT | Heroku |
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
							Built a web application, hosted on GitHub Pages that demonstrates the working of a sorting .
							The application supports 4 of the most common algorithms - Bubble Sort, Selection Sort,
							Merge Sort and Quick Sort with adjustable animation speed. Array length can be set anywhere
							from 10 to 185 with delay option in range 0.01ms to 200ms corresponding to the pause between
							every sorting step.
						</h4>
						<p
							style={{
								textAlign  : 'right',
								color      : 'rgba(41,41,41, .85)',
								fontSize   : '15px',
								fontWeight : 'bold'
							}}>
							| React.js | MaterialUI | StyledDiv |
						</p>
					</ProjectTextBody>
				</ProjectDescriptionContainer>

				<Header>
					<h1>A few other ineresting projects</h1>
				</Header>
				<ProjectDescriptionContainer>
					<OtherProjectsContainer>
						<a
							href={'https://github.com/arsaikia/E-commerceApp'}
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							<GridColumn1>
								<DescriptionText>
									<h3>E-Commerce Website</h3>
									<p>
										• Engineered a fully functional Electronic Vendor Website using JS, jQuery,
										Bootstrap, HTML5, CSS3, AJAX and used Oracle SQL to track sales, products,
										inventory and reorders<br />
										<br /> • Introduced a UI filter using PHP that categorizes products based on
										manufacturer, product type<br />
										<br /> • Configured automated re-ordering of products and inventory update when
										product quantity drops below 20
									</p>
								</DescriptionText>
							</GridColumn1>
						</a>
						<a
							href={
								'https://github.com/arsaikia/MLND_Capstone_Human_Activity_Recognition_Using_Smartphones_Sensor_Data/blob/master/Capstone_Report.pdf'
							}
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							<GridColumn2>
								<DescriptionText>
									<h3>Human Activity Recognition Using Smartphones Sensor Data </h3>
									<p>
										• In depth analysis and visualization exploration of how the dataset’s
										underlying features influences prediction<br />
										<br /> • Leveraged 4 ML models SVC, Logistic Regression, LGBM and Keras NN to
										find the optimum model for the problem at hand<br />
										<br /> • Achieved a state of the art F1 Score: 99.22% and Log Loss Score of
										0.025 with the optimum SVC
									</p>
								</DescriptionText>
							</GridColumn2>
						</a>
						<a
							href={'https://github.com/arsaikia/Neural-Style-Transfer-for-Images'}
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							<GridColumn3>
								<DescriptionText>
									<h3>Neural Style Transfer</h3>
									<p>
										• Implemented a script that takes a content image and a style image as input,
										and outputs a mix of the content and style image using deep learning libraries:
										Keras and Tensorflow<br />
										<br /> • Achieved state of the art results in 100 iterations comparable to
										outputs from mobile app Prisma or web app Deepart.io<br />
									</p>
								</DescriptionText>
							</GridColumn3>
						</a>
						<a
							href={'https://github.com/arsaikia/Data-Modeling-with-Cassandra'}
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							<GridColumn4>
								<DescriptionText>
									<h3>Data Modelling with Apache Cassandra</h3>
									<p>
										• Strategized and configured an ETL pipeline for data modeling with Apache
										Cassandra using Python for a music streaming application, Sparkify<br />
										<br /> • Application analyzes users’ listening pattern, to further suggest
										similar songs<br /> <br />
										<br />
									</p>
								</DescriptionText>
							</GridColumn4>
						</a>
					</OtherProjectsContainer>
				</ProjectDescriptionContainer>

				{/*  */}
			</ProjectsContainer>
		</Fragment>
	);
};

export default Projects;
