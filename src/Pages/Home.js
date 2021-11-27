import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from '../Components/AR/Main';
import { Link } from 'react-router-dom';
import Image from '../Assets/Images/sprouts-background.jpg';
import Layout from '../Components/Layout/Layout';
import { size } from '../Components/Global/global.styles';

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	@media (max-width: ${size.tablet}) {
   	 height: -webkit-fill-available;
  	}

	/* gap: 30%; */
	/* background-image: url(${Image});
	background-repeat: no-repeat; */
`;

const ImageEl = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	object-fit: cover;
	/* mix-blend-mode: normal; */
`;

const Title = styled.h2`
	text-align: center;
	margin: auto;
`;
export const StyledLink = styled(Link)`
	text-align: center;
	margin: 0;
	padding: 0;
	text-decoration: none;
	color: darkolivegreen;
	/* mix-blend-mode: screen; */
`;

const Home = () => {
	return (
		<Layout>
			<HomeWrapper>
				<ImageEl src={Image} />
				<Title> Sprouts, Variants </Title>
				<StyledLink to={'/ar'}> Go To AR </StyledLink>
			</HomeWrapper>
		</Layout>
	);
};

export default Home;
