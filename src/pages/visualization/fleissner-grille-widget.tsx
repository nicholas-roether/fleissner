import { Box, Card, makeStyles, Slide, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { CSSTransition } from "react-transition-group";
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
		height: "100%",
		position: "relative"
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

const Widget = ({message, showGrille = false, rotation = 0}: FleissnerGrilleWidgetProps) => {
	const classes = useStyles();
	const theme = useTheme();
	const smallLetters = useMediaQuery(theme.breakpoints.down("xs"));

	const [state, setState] = React.useState(false);
	const rebuild = () => setState(!state);

	const rebuildTimeoutRef = React.useRef<NodeJS.Timeout>();

	const prevRotation = usePreviousValue(rotation) || 0;
	const gridLetters = encodeMessage(message);
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<LetterGrid size={6} letters={gridLetters} fontSize={smallLetters ? "2em" : "6em"} />
			</div>
			<div className={classes.overlay}>
				<Slide in={showGrille} direction="down">
					<div>
						<CSSTransition in={true} appear={prevRotation !== rotation} timeout={20} key={`${rotation};${prevRotation}`}>
							{(state) => {
								// Stupid fix for iOS animation problems
								if(state === "entering") {
									if(rebuildTimeoutRef.current) clearTimeout(rebuildTimeoutRef.current)
									rebuildTimeoutRef.current = setTimeout(() => rebuild(), 220);
								}
								return (
									<div 
										style={{transform: `rotate(${(state === "entering" ? prevRotation : rotation) * 90}deg`}}
										className={classes.rotationAnim}
									>
										<FleissnerGrille />
									</div>
								);
							}}
						</CSSTransition>
					</div>
				</Slide>
			</div>
		</div>
	);
}

const FleissnerGrilleWidget = (props: FleissnerGrilleWidgetProps) => {
	const classes = useStyles();
	return (
		<>
			<Box mt={5} />
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
		</>
	)
}

export default FleissnerGrilleWidget;