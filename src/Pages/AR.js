import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from '../Components/AR/Main';
import Layout from '../Components/Layout/Layout'
const ARWrapper = styled.div``;

export const Title = styled.p`
	text-align: center;
	margin: 0;
	padding: 0;
`;

const AR = () => {
	return (
		<Layout>
			<ARWrapper>
				<Main />
			</ARWrapper>
		</Layout>
	);
};

export default AR;
