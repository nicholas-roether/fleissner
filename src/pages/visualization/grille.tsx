import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { fleissnerGrille } from "../../utils/fleissner-utils";

const useStyles = makeStyles((theme) => ({
	grilleContainer: {
		height: 0,
		paddingBottom: "100%",
		width: "100%",
		position: "relative"
	},
	grille: {
		position: "absolute",
		top: 0,
		left: 0,
		boxSizing: "content-box",
		width: "100%",
		height: "100%",
		border: "10px #000 solid",
		margin: "-10px",
		borderRadius: "10px",
	}
}));



export interface GrilleProps {
	size: number,
	cutouts: number[]
}

const Grille = ({size, cutouts}: GrilleProps) => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div className={classes.grilleContainer}>
			<svg className={classes.grille} viewBox="0 0 100 100">
				<defs>
					<mask id="cutout-mask">
						<rect x="0" y="0" width="100" height="100" fill="#fff" />
						{cutouts.map((index, key) => {
							const tileSize = 100 / size;
							return (
								<rect
									width={tileSize * 0.9}
									height={tileSize * 0.9}
									x={tileSize * (index % size + 0.05)}
									y={tileSize * (Math.floor(index / size) + 0.05)}
									rx="2"
									ry="2"
									fill="#000"
									key={key}
								/>
							)
						})}
					</mask>
				</defs>

				<rect 
					x="0" 
					y="0" 
					width="100" 
					height="100" 
					mask="url(#cutout-mask)" 
					style={{fill: theme.palette.primary.main, opacity: 0.93}} 
				/>

				<path d="M48 0 L50 2.5 L52 0 Z"/>
			</svg>
		</div>
	);
}

const FleissnerGrille = () => (
	<Grille size={6} cutouts={fleissnerGrille} />
)

export default Grille;
export {
	FleissnerGrille
}