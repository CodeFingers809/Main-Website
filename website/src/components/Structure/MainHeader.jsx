import { Burger, Button, Header, MediaQuery, Text } from "@mantine/core";
import React from "react";
import { IconMoonStars } from "@tabler/icons";
import { ActionIcon } from "@mantine/core";

export default function MainHeader(props) {
	return (
		<Header height={{ base: 25, md:35 }} p="md">
			<div style={{ display: "flex", alignItems: "center", height: "100%", justifyContent: "space-between" }}>
				<MediaQuery>
					<Burger
						opened={props.opened}
						onClick={() => props.setOpened((o) => !o)}
						size="sm"
						color={props.theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>

				<ActionIcon
					onClick={() => props.setMainTheme((props.mainTheme + 1) % 2)}
				>
					<IconMoonStars />
				</ActionIcon>
			</div>
		</Header>
	);
}
