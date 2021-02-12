import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	letterSquare: {
		background: "#fff",
		color: "#000",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px #000 solid",
		width: "100%",
		height: "100%",
		boxSizing: "border-box",
		overflow: "hidden"
	},
	grid: {
		display: "grid",
		position: "absolute",
		width: "100%",
		height: "100%",
		fontFamily: "'Source Serif Pro', serif",
		border: "1px #000 solid",
		userSelect: "none",
		boxSizing: "border-box"
	},
	gridContainer: {
		height: 0,
		paddingBottom: "100%",
		position: "relative"
	}
}))

interface LetterSquareProps {
	letter: string;
}

const LetterSquare: React.FC<LetterSquareProps> = ({letter}) => {
	const classes = useStyles();
	return <div className={classes.letterSquare}>{letter}</div>;
}

export interface LetterGridProps {
	size: number;
	letters: string[];
	fontSize?: string;
}

const LetterGrid: React.FC<LetterGridProps> = ({size, letters, fontSize = "3em"}) => {
	const classes = useStyles();
	while(letters.length < size**2) letters.push(" ");
	while(letters.length > size**2) letters.pop();
	return (
		<div className={classes.gridContainer}>
			<div className={classes.grid} style={{
				gridTemplateColumns: `repeat(${size}, 1fr)`,
				gridTemplateRows: `repeat(${size}, 1fr)`,
				fontSize
			}
			}>
				{letters.map((letter, i) => (
					<LetterSquare letter={letter[0].toUpperCase()} />
				))}
			</div>
		</div>
	)
}

export default LetterGrid