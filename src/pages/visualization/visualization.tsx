import { Box, Button, Switch } from "@material-ui/core";
import React from "react";
import FleissnerGrilleWidget from "./fleissner-grille-widget";


const defaultMessage = "Moin, dies ist die Fleißnersche Schablone"

const VisualizationPage = () => {
	const [rotation, setRotation] = React.useState<number>(0);
	const [showGrille, setShowGrille] = React.useState<boolean>(false);
	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box maxWidth="600px" width="100%" mb={2}>
				<FleissnerGrilleWidget message={defaultMessage} rotation={rotation} showGrille={showGrille} />
			</Box>
			<span>
				<Button variant="contained" color="primary" disabled={!showGrille} onClick={() => setRotation(rotation + 1)}>Drehen</Button>
				<Box mr={1} display="inline" />
				<Button variant="contained" disabled={!showGrille || rotation % 4 === 0} onClick={() => setRotation(rotation - rotation % 4)}>Zurücksetzen</Button>
				<Box mr={3} display="inline" />
				<Switch checked={showGrille} onChange={(_, val) => setShowGrille(val)} />
				<span>Schablone zeigen</span>
			</span>
		</Box>
	);
};

export default VisualizationPage;