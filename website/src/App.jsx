import React, { useEffect } from "react";
import { BackgroundImage, MantineProvider, Paper } from "@mantine/core";
import Structure from "./components/Structure";
import { useState } from "react";

export default function App() {
	// const colorschemes = [{ colorScheme: "light",   }, { colorScheme: "dark" }];
	const colorschemes = ["light", "dark"];
	const [maintheme, setMainTheme] = useState(0);
	useEffect(() => {
		console.log(maintheme);
	}, [maintheme]);

	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colorScheme: colorschemes[maintheme],
				headings : {
					sizes: {h1 : {
						fontSize: 100
					}}
				},
			}}
			withCSSVariables
		>
			{/* <Paper shadow="xl" p="md"> */}
			<Structure setMainTheme={setMainTheme} mainTheme={maintheme} />
			{/* </Paper> */}
		</MantineProvider>
	);
}
