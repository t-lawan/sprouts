import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from '../Components/AR/Main';
import { Link } from "react-router-dom";
import Image from '../Assets/Images/sprouts-background.jpg'
import Layout from '../Components/Layout/Layout'

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	/* background-image: url(${Image});
	background-repeat: no-repeat; */
`;


const ImageEl = styled.img`
	    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
	object-fit: cover;
`

const Title = styled.h1`
	font-size: 3rem;
	text-align: center;
	
`
export const StyledLink = styled(Link)`
	text-align: center;
	margin: 0;
	padding: 0;
	font-size: 2rem;
	text-decoration: none;
`;

const Home = () => {
	return (
		<Layout>
		<HomeWrapper>
			<ImageEl src={Image} />
			<Title> Sprouts, Variants </Title>
			<StyledLink to={"/ar"}> Go To Ar </StyledLink>
		</HomeWrapper>
		</Layout>

	);
};

export default Home;
