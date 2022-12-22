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
import bg from "../assets/bg-img_dark.jpg"
import bg_light from "../assets/bg_light.png"

export default function Structure({ setMainTheme, mainTheme }) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					backgroundImage: mainTheme==1 ? `url("${bg}")` : `url("${bg_light}")`,
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
