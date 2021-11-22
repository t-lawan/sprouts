import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from '../Components/AR/Main';
import { Link } from "react-router-dom";

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;
const Title = styled.h1`
	font-size: 3rem
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
		<HomeWrapper>
			<Title> Sprouts </Title>
			<StyledLink to={"/ar"}> Go To Ar </StyledLink>
		</HomeWrapper>
	);
};

export default Home;
