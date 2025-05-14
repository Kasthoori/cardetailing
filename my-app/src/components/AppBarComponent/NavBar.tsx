import { FC, useState } from "react";
import { toolBarClass, typhographyClass } from "./NavBar.styles";
import { 
	AppBar, 
	Drawer, 
	IconButton, 
	List, 
	ListItem, 
	ListItemText, 
	Toolbar,
	Typography, 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar:FC = () => {


	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open: boolean) => () => {

		setDrawerOpen(open);
	}

	const navItems = ['Home', 'About Us', 'Contact Us'];

	return (
	
		<>
		<AppBar position="static" sx={{ backgroundColor: '#000000' }} className="shadow-md">
			<Toolbar className={toolBarClass}>
				<Typography variant="h6" className={typhographyClass}>
					Revive Auto Detailing
				</Typography>
				<div className="hidden md:flex space-x-6">
					{navItems.map((item) => (
						<a
							key={item}
							href="#"
							className="hover:text-blue-600 transition font-light"
						>
							{item}
						</a>
					))}
				</div>
				<div className="block md:hidden">
				<IconButton
					edge="end"
					size="medium"
					aria-label="menu"
					onClick={toggleDrawer(true)}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
                </div>
			</Toolbar>
		</AppBar>
		
		<Drawer
			anchor="right"
			open={drawerOpen}
			onClose={toggleDrawer(false)}
		>
			<div className="w-48 bg-gray-300 h-full">
				<List>
					{navItems.map((item) => (
						<ListItem component="button" key={item} onClick={toggleDrawer(false)}>
							<ListItemText primary={item} />
						</ListItem>
					))}	
				</List>
			</div>
		</Drawer>
	 </>
		
	);
}

export default NavBar;