import { Box, Button } from "@material-ui/core";
import React from "react";
import FleissnerGrilleWidget from "./fleissner-grille-widget";


const defaultMessage = "Moin, dies ist die Fleißnersche Schablone"

const VisualizationPage: React.FC = () => {
	const [rotation, setRotation] = React.useState<number>(0);
	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box width="600px">
				<FleissnerGrilleWidget message={defaultMessage} rotation={rotation} />
			</Box>
			<span>
				<Button variant="contained" onClick={() => setRotation(rotation + 1)}>Rotate</Button>
			</span>
		</Box>
	);
};

export default VisualizationPage;