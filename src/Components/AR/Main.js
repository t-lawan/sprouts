import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@google/model-viewer';
import KnottyModel from '../../Assets/Models/Knotty.usdz'
import TestModel from '../../Assets/Models/Test.glb'
const MainWrapper = styled.div`
	width: 100vw;
	height: 100vh;

	model-viewer {
		position: absolute;
		width: 90%;
		height: 90%;
		left: 5%;
		top: 5%;
	}
`;

export const ActivateARButton = styled.p`
  border: none;
  position: absolute;
  bottom: 1%;
  right: 5%;
`;
const Main = (props) => {
	const [ src, setSrc ] = useState(TestModel);
	const [ iosSrc, setIosSrc ] = useState(KnottyModel);
	const [ title, setTitle ] = useState('Sprouts');

	return (
		<MainWrapper>
			<model-viewer
				// src={AstronautGLB}
				// ios-src={AstronautUSDZ}
				src={src}
				ios-src={iosSrc}
				ar
				// ar-modes="webxr scene-viewer quick-look"
				alt={title}
				camera-controls
				alt="Astronaut"
				ar-placement="floor"
			>
				<ActivateARButton slot="ar-button">AR</ActivateARButton>
			</model-viewer>
		</MainWrapper>
	);
};

export default Main;