import { Box, Container } from "@material-ui/core";
import React from "react";
import VisualizationPage from "../pages/visualization/visualization";
import ImplementationPage from "../pages/implementation/implementation";

const pages: React.ReactElement[] = [
	<VisualizationPage />,
	<ImplementationPage />
]

export interface ContentProps {
	tab: number
}

const Content: React.FC<ContentProps> = ({tab}) => (
	<Container maxWidth="lg" component="main">
		<Box marginY={2}>
			{/* Perhaps keep closed tabs rendered? */}
			{pages[tab]}
		</Box>
	</Container>
);

export default Content;