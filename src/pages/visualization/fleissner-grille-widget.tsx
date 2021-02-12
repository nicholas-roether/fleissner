import { Box, Card, Fade, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { Transition } from "react-transition-group";
import { fleissnerEncode } from "../../utils/fleissner-utils";
import { usePreviousValue } from "../../utils/hooks";
import { FleissnerGrille } from "./grille";
import LetterGrid from "./letter-grid";

const useStyles = makeStyles((theme) => ({
	container: {
		position: "relative",
		width: "100%"
	},
	content: {
		width: "100%",
	},
	overlay: {
		width: "100%",
		position: "absolute",
		top: 0,
		right: 0
	},
	rotationAnim: {
		transition: "transform 200ms"
	},
	card: {
		padding: theme.spacing(1, 2),
		overflow: "visible",
		maxWidth: "calc(600px + 1em)"
	},
	cardContentContainer: {
		margin: "auto",
		// display: "inline-block",
		maxWidth: "600px",
		textAlign: "center"
	},
}));

function encodeMessage(message: string): string[] {
	const messageSanitized = message.toUpperCase().split("").filter(char => /[A-Z]/.test(char)).join("").substr(0, 36);
	return fleissnerEncode(messageSanitized);
}

export interface FleissnerGrilleWidgetProps {
	message: string;
	showGrille?: boolean;
	rotation?: number;
}

const Widget: React.FC<FleissnerGrilleWidgetProps> = ({message, showGrille = false, rotation = 0}) => {
	const classes = useStyles();
	const theme = useTheme();
	const smallLetters = useMediaQuery(theme.breakpoints.down("xs"));
	const prevRotation = usePreviousValue(rotation) || 0;
	console.log(prevRotation);
	
	const gridLetters = encodeMessage(message);
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<LetterGrid size={6} letters={gridLetters} fontSize={smallLetters ? "2em" : "6em"} />
			</div>
			<div className={classes.overlay}>
				<Fade in={showGrille}>
					<Transition in={true} appear={true} timeout={20} key={rotation}>
						{(state) => {
							return (
								<div 
									style={{transform: `rotate(${(state !== "entered" ? prevRotation : rotation) * 0.25}turn`}}
									className={classes.rotationAnim}
								>
									<FleissnerGrille />
								</div>
							);
						}}
					</Transition>
				</Fade>
			</div>
		</div>
	);
}

const FleissnerGrilleWidget: React.FC<FleissnerGrilleWidgetProps> = (props) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<div className={classes.cardContentContainer}>
				<Box>1</Box>
				<Box display="flex" alignItems="center">
					<span>4</span>
					<Box p={2} width="100%"><Widget {...props} /></Box>
					<span>2</span>
				</Box>
				<Box>3</Box>
			</div>
		</Card>
	)
}

export default FleissnerGrilleWidget;