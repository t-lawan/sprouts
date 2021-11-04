import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from '../Components/AR/Main';

const HomeWrapper = styled.div``;

export const Title = styled.p`
	text-align: center;
	margin: 0;
	padding: 0;
`;

const Home = () => {
	return (
		<HomeWrapper>
			<Main />
		</HomeWrapper>
	);
};

export default Home;
