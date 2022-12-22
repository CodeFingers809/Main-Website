import React, { useEffect } from "react";
import { BackgroundImage, MantineProvider } from "@mantine/core";
import Structure from "./components/Structure";
import { useState } from "react";

export default function App() {
	const colorschemes = [{ colorScheme: "light",   }, { colorScheme: "dark" }];
	const [maintheme, setMainTheme] = useState(0);
	useEffect(() => {
		console.log(maintheme);
	}, [maintheme]);

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={colorschemes[maintheme]}>
			<Structure setMainTheme={setMainTheme} mainTheme={maintheme} />
		</MantineProvider>
	);
}
