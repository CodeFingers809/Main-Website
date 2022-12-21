import { Burger, Button, Header, MediaQuery, Text } from "@mantine/core";
import React from "react";

export default function MainHeader(props) {
	return (
		<Header height={{ base: 50, md: 70 }} p="md">
			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				<MediaQuery largerThan="sm" styles={{ display: "none" }}>
					<Burger
						opened={props.opened}
						onClick={() => props.setOpened((o) => !o)}
						size="sm"
						color={props.theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>

				<Text>Application header</Text>
        <Button onClick={() => props.setMainTheme((props.mainTheme+1)%2)}>Change Theme</Button>
			</div>
		</Header>
	);
}
