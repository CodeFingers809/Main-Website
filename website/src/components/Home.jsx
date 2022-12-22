import { BackgroundImage, Box, Center, Text } from "@mantine/core";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import muzik from "../assets/muzik.mp3";

export default function Home(props) {

	return (
		<div>
			<h1>Welcome to AI Colegion</h1>
      {props.music == undefined || props.music == null ? <ReactAudioPlayer src={`${muzik}`} autoPlay volume={0.1} loop={true} /> : null }
			{props.music? <ReactAudioPlayer src={`${muzik}`} autoPlay volume={0.1} loop={true} /> : null }
		</div>
	);
}
