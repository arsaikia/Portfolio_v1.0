import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Linkedin, GitHub, Mail, CV } from '../../Icons/Contact';

import { backgroundColor, darkBackgroundColor } from '../../Context/Colors';

const Spacing = styled.div`
	width: 100%;
	margin-bottom: ${(props) => props.space}px;

	@media (max-width: 768px) {
		margin-bottom: ${(props) => props.mobileSpace}px;
	}
`;

const OuterContainer = styled.div`
	width: 100vw;
	background-color: ${backgroundColor};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const ContactsContainer = styled.div`
	width: 300px;
	padding-bottom: 50px;
	background-color: ${backgroundColor};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		overflow-y: hidden;
		width: 300px;
	}
`;

const HeaderText = styled.text`
	font-family: "Gilroy";
	font-size: 34px;
	line-height: 42px;
	font-weight: 700;
	text-align: center;
	color: #070707;

	@media (max-width: 768px) {
		width: 300px;
		font-size: 34px;
		line-height: 42px;
		text-align: center;

		color: #000000;
	}
`;

const SubtitleText = styled.text`
	font-family: "Gilroy";
	font-size: 18px;
	line-height: 22px;
	font-weight: 500;
	text-align: center;

	color: #070707;

	@media (max-width: 768px) {
		width: 300px;
		font-size: 18px;
		line-height: 22px;
		text-align: center;

		color: #000000;
	}
`;

const ContactButton = styled.button`
	padding: 13px 30px 13px 30px;
	background: #070707;
	border-radius: 25px;
	cursor: pointer;
	transition: 0.5s all ease-out;
	border: none;
	outline: 0;

	&:hover {
		opacity: 0.85;
	}

	@media (max-width: 768px) {
		width: 280px;
	}
`;

const ButtonText = styled.text`
	font-size: 18px;
	line-height: 22px;
	font-wright: 600;
	text-align: center;

	color: #ffffff;
`;

const IconContainers = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	flex-direction: row;

	@media (max-width: 768px) {
		width: 300px;
	}
`;

const Icon = styled.div`
	cursor: pointer;
	transition: 0.5s all ease-out;
	&:hover {
		opacity: 0.65;
	}
`;

const ContactFooter = styled.text`
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	font-weight: 500;
	color: #828282;

	@media (max-width: 768px) {
		width: 300px;
	}
`;

const Badge = styled.div`
	width: 100%;
	height: 20px;

	font-size: 12px;
	line-height: 14px;
	text-align: center;
	font-weight: 600;
	color: #4e78f7;
`;

const Contacts = () => {
	const [ linkedin, setLinkedin ] = useState(false);
	const [ github, setGithub ] = useState(false);
	const [ mail, setMail ] = useState(false);
	const [ cv, setCv ] = useState(false);

	const focusHandler1 = () => {
		linkedin ? setLinkedin(false) : setLinkedin(true);
	};
	const focusHandler2 = () => {
		github ? setGithub(false) : setGithub(true);
	};
	const focusHandler3 = () => {
		mail ? setMail(false) : setMail(true);
	};
	const focusHandler4 = () => {
		cv ? setCv(false) : setCv(true);
	};

	return (
		<Fragment>
			<OuterContainer>
				<ContactsContainer id='contacts'>
					<Spacing space={114.24} mobileSpace={82} />
					<HeaderText>Contact</HeaderText>
					<Spacing space={20} mobileSpace={20} />
					<SubtitleText>Want to know more or just chat? You are welcome!</SubtitleText>
					<Spacing space={30} mobileSpace={40} />
					<ContactButton>
						<ButtonText>Send message</ButtonText>
					</ContactButton>
					<Spacing space={85} mobileSpace={48} />
					<IconContainers>
						<a href={'https://www.linkedin.com/in/arsaikia/'} target='_blank' rel='noopener noreferrer'>
							<Icon onMouseOver={focusHandler1} onMouseOut={focusHandler1}>
								<Linkedin />
							</Icon>
						</a>
						<a href={'https://github.com/arsaikia'} target='_blank' rel='noopener noreferrer'>
							<Icon onMouseOver={focusHandler2} onMouseOut={focusHandler2}>
								<GitHub />
							</Icon>
						</a>
						<a href='mailto:asaikia1@hawk.iit.edu' target='_blank' rel='noopener noreferrer'>
							<Icon onMouseOver={focusHandler3} onMouseOut={focusHandler3}>
								<Mail />
							</Icon>
						</a>
						<a
							href=' https://github.com/arsaikia/Contact-Keeper/raw/master/Arunabh_Saikia_Resume(v3.0).pdf'
							target='_blank'>
							<Icon onMouseOver={focusHandler4} onMouseOut={focusHandler4}>
								<CV />
							</Icon>
						</a>
					</IconContainers>
					<Spacing space={25} mobileSpace={28} />
					<Badge>
						{linkedin ? (
							<p>Go to LinkedIn Page.</p>
						) : github ? (
							<p>Go to Github.</p>
						) : mail ? (
							<p>Send a mail.</p>
						) : cv ? (
							<p>Download resume</p>
						) : null}
					</Badge>
					<Spacing space={20} mobileSpace={20} />
					<ContactFooter>Contact me through LinkedIn, Github, Gmail, or download my Resume</ContactFooter>
				</ContactsContainer>
			</OuterContainer>
		</Fragment>
	);
};

export default Contacts;
