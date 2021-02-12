import { makeStyles } from "@material-ui/core";
import React from "react";
import { fleissnerEncode } from "../../utils/fleissner-utils";
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

const defaultMessage = "Moin, dies ist die Fleißnersche Schablone"

const VisualizationPage: React.FC = () => {
	const classes = useStyles();
	const messageSanitized = defaultMessage.toUpperCase().split("").filter(char => /[A-Z]/.test(char)).join("");
	console.log(messageSanitized);
	const gridLetters = fleissnerEncode(messageSanitized);
	return (
		<div className={classes.container}>
			<div className={classes.content}><LetterGrid size={6} letters={gridLetters} fontSize="7em" /></div>
			<div className={classes.content}><FleissnerGrille /></div>
		</div>
	);
};

export default VisualizationPage;