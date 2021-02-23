import { Box, Button, IconButton, Switch } from "@material-ui/core";
import { RotateLeftTwoTone as RotateLeftIcon, RotateRightTwoTone as RotateRightIcon } from "@material-ui/icons";
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
				<Button variant="contained" color="primary" disabled={!showGrille} onClick={() => setRotation(rotation + 1)} startIcon={<RotateRightIcon />}>Drehen</Button>
				<Box mr={1} display="inline" />
				<IconButton disabled={!showGrille} onClick={() => setRotation(rotation - 1)} size="small"><RotateLeftIcon /></IconButton>
				<Box mr={2} display="inline" />
				<Button variant="contained" disabled={!showGrille || rotation % 4 === 0} onClick={() => setRotation(rotation - rotation % 4)}>Zurücksetzen</Button>
				<Box mr={3} display="inline" />
				<Switch id="show-grille-switch" checked={showGrille} onChange={(_, val) => setShowGrille(val)} />
				<label htmlFor="show-grille-switch">Schablone zeigen</label>
			</span>
		</Box>
	);
};

export default VisualizationPage;