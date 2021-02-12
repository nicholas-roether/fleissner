import { Button } from "@material-ui/core";
import React from "react";
import FleissnerGrilleWidget from "./fleissner-grille-widget";


const defaultMessage = "Moin, dies ist die Fleißnersche Schablone"

const VisualizationPage: React.FC = () => {
	const [rotation, setRotation] = React.useState<number>(0);
	return (
		<>
			<FleissnerGrilleWidget message={defaultMessage} rotation={rotation} />
			<Button variant="contained" onClick={() => setRotation(rotation + 1)}>Rotate</Button>
		</>
	);
};

export default VisualizationPage;