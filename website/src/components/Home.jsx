import { BackgroundImage, Box, Button, Center, Container, Overlay, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import muzik from "../assets/muzik.mp3";
import "../css/Home.css"

export default function Home(props) {
	const theme = useMantineTheme();
	return (
		<div className="overlay-div">
			{props.music? <ReactAudioPlayer src={`${muzik}`} autoPlay volume={0.1} loop={true} /> : null }
			<div className="overlay-div-light"></div>
			{/* {props.mainTheme == 0 ? <Overlay c={"#000"} opacity={0.15} zIndex={0}/> : <Overlay c={theme.white} opacity={0.3} zIndex={1}/>} */}
			<div className="main-div">
				<div className="header-div">
					<Title order={1}>Welcome to AI Colegion</Title>
				</div>
				<div className="description">
					<Container>
						<Title order={4}>It was worse, worse than anything he had ever felt. His head felt like a raging inferno and his body felt like hot steel. He wanted to die. Die, rather than writhe in agony. He felt his thoughts slipping away as he felt the pain increasing. His last coherent thoughts were of his wife. He could remember her blonde hair. But as he tried to remember her face, he fell away, gone forever. </Title>
					</Container>
				</div>
			</div>
		</div>
	);
}
