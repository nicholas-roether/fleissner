import { AppBar, Box, makeStyles, Tab, Tabs, TabsProps, Toolbar, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";

import icon from "../res/icon.png";

const useStyles = makeStyles((theme) => ({
	tabs: {
		...theme.mixins.toolbar,
		flexDirection: "row",
	},
	tabsFlexContainer: {
		height: "100%"
	},
	heading: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "50px"
	},
	mobileToolbar: {
		display: "block",
		padding: 0,
		marginTop: theme.spacing(2)
	},
	mobileAppBar: {
		top: "-50px"
	}
}));

const Heading: React.FC = () => {
	const classes = useStyles();
	const theme = useTheme();
	const smallTitle = useMediaQuery(theme.breakpoints.down("xs"));
	return (
		<span className={classes.heading}>
			<a href={process.env.PUBLIC_URL}>
				<img src={icon} alt="" height="32"/>
			</a>
			<Box mr={2}/>
			<Typography variant={smallTitle ? "h6" : "h5"}>Fleißnersche Schablone</Typography>
		</span>
	);
}

interface TabBarProps extends Omit<TabsProps, "onChange"> {
	onChange?: (value: number) => void
}

const TabBar: React.FC<TabBarProps> = ({onChange, ...other}) => (
	<Tabs onChange={(_, value) => onChange && onChange(value)} {...other}>
		<Tab label="Veranschaulichung"/>
		<Tab label="Implementierung"/>
	</Tabs>
);


export interface MyAppBarProps {
	tab?: number,
	onTabChange?: (tab: number) => void
}

const MobileAppBar: React.FC<MyAppBarProps> = ({tab, onTabChange}) => {
	const classes = useStyles();
	return (
		<AppBar position="sticky" className={classes.mobileAppBar}>
			<Heading />
			<TabBar 
				value={tab}
				onChange={(value) => onTabChange && onTabChange(value)}
				variant="fullWidth"
			/>
		</AppBar>
	);
}

const DesktopAppBar: React.FC<MyAppBarProps> = ({tab, onTabChange}) => {
	const classes = useStyles();
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Heading />
				<Box mr={4} />
				<TabBar
					value={tab}
					onChange={(value) => onTabChange && onTabChange(value)}
					classes={{
						root: classes.tabs,
						flexContainer: classes.tabsFlexContainer
					}}
				/>
			</Toolbar>
		</AppBar>
	);
}

const MyAppBar: React.FC<MyAppBarProps> = (props) => {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return mobile ? <MobileAppBar {...props} /> : <DesktopAppBar {...props} />
}

export default MyAppBar;