import { useState } from "react";
import { createStyles, Navbar, Group, Code, ActionIcon } from "@mantine/core";
import {
	IconBellRinging,
	IconFingerprint,
	IconKey,
	IconSettings,
	Icon2fa,
	IconDatabaseImport,
	IconReceipt2,
	IconSwitchHorizontal,
	IconLogout,
} from "@tabler/icons";
import { IconHome } from "@tabler/icons";
import { IconBrandBlogger } from "@tabler/icons";
import { IconUsers } from "@tabler/icons";
import { IconCalendarEvent } from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import logo from "../../assets/transparent_logo.png";
import ReactAudioPlayer from "react-audio-player";
import muzik from "../../assets/muzik.mp3";
import { IconPlayerPause } from '@tabler/icons';
import { IconPlayerPlay } from '@tabler/icons';

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef("icon");
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[2]
			}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: "flex",
			alignItems: "center",
			textDecoration: "none",
			fontSize: theme.fontSizes.sm,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[1]
					: theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				color: theme.colorScheme === "dark" ? theme.white : theme.black,

				[`& .${icon}`]: {
					color: theme.colorScheme === "dark" ? theme.white : theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[2]
					: theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			"&, &:hover": {
				backgroundColor: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).background,
				color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
					.color,
				[`& .${icon}`]: {
					color: theme.fn.variant({
						variant: "light",
						color: theme.primaryColor,
					}).color,
				},
			},
		},
	};
});

const data = [
	{ link: "", label: "Home", icon: IconHome },
	{ link: "", label: "Blog", icon: IconBrandBlogger },
	{ link: "", label: "About", icon: IconUsers },
	{ link: "", label: "Upcoming Events", icon: IconCalendarEvent },
	// { link: "", label: "Databases", icon: IconDatabaseImport },
	// { link: "", label: "Authentication", icon: Icon2fa },
	// { link: "", label: "Other Settings", icon: IconSettings },
];

export default function MainNavbar(props) {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState("Billing");

	const links = data.map((item) => (
		<a
			className={cx(classes.link, {
				[classes.linkActive]: item.label === active,
			})}
			href={item.link}
			key={item.label}
			onClick={(event) => {
				event.preventDefault();
				setActive(item.label);
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</a>
	));

	return (
		<Navbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!props.opened}
			width={{ sm: 150, lg: 300 }}
		>
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					<img src={`${logo}`} alt="logo" width={100} height={90} />
					{/* <MantineLogo size={28} /> */}
					<Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
				</Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<div
					className={classes.link}
					// onClick={(event) => event.preventDefault()}
				>
					<h4>Play some muzik ?</h4>
				</div>

				{/* <div
					className={classes.link}
					onClick={(event) => event.preventDefault()}
				> */}
					{/* <ReactAudioPlayer src={`${muzik}`} autoPlay volume={0.1} controls loop={true} /> */}
					<ActionIcon onClick={() => props.setMusic(!props.music)}>
						{props.music ? <IconPlayerPause /> : <IconPlayerPlay />}
						
					</ActionIcon>
				{/* </div> */}
			</Navbar.Section>
		</Navbar>
	);
}
