import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { toolBarClass } from "./NavBar.styles";

const NavBar:FC = () => {
	return (
		<AppBar position="static">
            <Toolbar className={toolBarClass}>
			    NavBar Component
            </Toolbar>
		</AppBar>
	);
}

export default NavBar;