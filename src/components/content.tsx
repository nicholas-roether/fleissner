import { Container } from "@material-ui/core";
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
		{/* Perhaps keep closed tabs rendered? */}
		{pages[tab]}
	</Container>
);

export default Content;