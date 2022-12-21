import { useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Button,
	ActionIcon,
} from "@mantine/core";
import MainNavbar from "./Structure/MainNavbar";
import MainSideBar from "./Structure/MainSideBar";
import MainFooter from "./Structure/MainFooter";
import MainHeader from "./Structure/MainHeader";
import { IconMoonStars } from "@tabler/icons";
import Home from "./Home";
// import MainHeader from './Structure/MainHeader';
import bg from "../assets/bg-img.jpg"

export default function Structure({ setMainTheme, mainTheme }) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const path =
		"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80";
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					backgroundImage: `url("${bg}")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				// <MainNavbar opened={opened} />
				opened ? <MainNavbar opened={opened} /> : null
			}
			// aside={
			//   <MainSideBar />
			// }
			// footer={
			//   <MainFooter />
			// }
			header={
				<MainHeader
					opened={opened}
					setOpened={setOpened}
					theme={theme}
					setMainTheme={setMainTheme}
					mainTheme={mainTheme}
				/>
			}
		>
			<Home />
		</AppShell>
		// <div>
		// 	<Header >
		//     <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
		//       <MediaQuery largerThan="sm" styles={{ display: "none" }}>
		//         <Burger
		//           opened={opened}
		//           onClick={() => setOpened((o) => !o)}
		//           size="sm"
		//           color={theme.colors.gray[6]}
		//           mr="xl"
		//         />
		//       </MediaQuery>
		//       <ActionIcon onClick={() => setMainTheme((mainTheme + 1) % 2)}>
		//         <IconMoonStars />
		//       </ActionIcon>
		//     </div>
		// 	</Header>
		//   <div>
		//     <Navbar
		//       p="md"
		//       hiddenBreakpoint="sm"
		//       hidden={!opened}
		//       width={{ sm: 200, lg: 300 }}
		//     >
		//       <Text>Application navbar</Text>
		//     </Navbar>
		//     <h1>HALLO EVERYINAN</h1>
		//   </div>
		// </div>
	);
}
