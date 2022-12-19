import React from "react";
import { MantineProvider } from "@mantine/core";
import Structure from "./components/Structure";

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Structure />
		</MantineProvider>
	);
}
