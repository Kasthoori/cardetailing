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
import Logo from "/src/assets/RiviveAutoLogo.jpeg";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar:FC = () => {

	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open: boolean) => () => {

		setDrawerOpen(open);
	}

	const sectionIdMap: Record<string, string> = {
		'Home': 'home-section',
		'Our Services': 'services-section',
		'Reviews' : 'customer-reviews',
		'Contact Us' : 'constact-section',
	}

	const handleScroll = (section: string, event?: React.MouseEvent) => {
		
		event?.preventDefault();
		(event?.currentTarget as HTMLElement)?.blur();

		const sectionId = sectionIdMap[section];
		if (!sectionId) return;
		
		const el = document.getElementById(sectionId);
		el?.scrollIntoView({behavior: 'smooth', block: 'start'});
	}

	const navItems = ['Home', 'Our Services', 'Reviews', 'Contact Us'];

	return (
	
		<>
		<AppBar position="fixed" sx={{ backgroundColor: '#000000' }} className="shadow-md">
			<Toolbar className={toolBarClass}>
			<div className="flex items-center space-x-2">
				<img src={Logo} alt="Logo" className="h-12 w-auto" />
				<Typography variant="h6" className={typhographyClass}>
					Revive Auto Detailing
				</Typography>
			</div>
				<div className="hidden md:flex space-x-6">
					{navItems.map((item) => (
						<a
							key={item}
							onClick={(e) => { 
								requestAnimationFrame(() => e.currentTarget.blur())
								handleScroll(item)
							}}
							className="transition font-light focus:outline-none focus:ring-red-600"
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
						<ListItem 
							component="button" 
							key={item} 
							onClick={() => {
									handleScroll(item)
									toggleDrawer(false)
								}}
						>
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