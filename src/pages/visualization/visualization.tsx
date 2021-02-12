import { makeStyles } from "@material-ui/core";
import React from "react";
import { FleissnerGrille } from "./grille";
import LetterGrid from "./letter-grid";

const useStyles = makeStyles({
	container: {
		position: "relative",
		maxWidth: "600px"
	},
	content: {
		position: "absolute",
		width: "100%",
	}
});

const VisualizationPage: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.content}><LetterGrid size={6} letters={["a", "b", "c", "d", "e", "f"]} fontSize="7em" /></div>
			<div className={classes.content}><FleissnerGrille /></div>
		</div>
	);
};

export default VisualizationPage;