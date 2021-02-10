import { AppBar, Box, makeStyles, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
tabs: {
	...theme.mixins.toolbar,
	flexDirection: "row"
},
}));

export interface MyAppBarProps {
	tab?: number,
	onTabChange?: (tab: number) => void
}

const MyAppBar: React.FC<MyAppBarProps> = ({tab, onTabChange}) => {
	const classes = useStyles();
	return (
	<AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Fleißnersche Schablone</Typography>
          <Box mr={4}/>
          <Tabs value={tab} onChange={(_, value) => onTabChange && onTabChange(value)} className={classes.tabs}>
            <Tab label="Veranschaulichung"/>
            <Tab label="Implementierung"/>
          </Tabs>
        </Toolbar>
      </AppBar>
	)
}

export default MyAppBar;