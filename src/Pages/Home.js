import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from '../Components/AR/Main';
import { Link } from 'react-router-dom';
import Image from '../Assets/Images/sprouts-background-new.jpg';
import Layout from '../Components/Layout/Layout';
import { size } from '../Components/Global/global.styles';

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	width: 100%;
    height: 40%;
    top: 50%;
    justify-content: space-between;
`;

const HomeWrapper = styled.div`

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
	/* margin: auto; */
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
				<FlexWrapper>
					<Title> Sprouts, Variants </Title>
					<StyledLink to={'/ar'}> Go To AR </StyledLink>
				</FlexWrapper>
			</HomeWrapper>
		</Layout>
	);
};

export default Home;
