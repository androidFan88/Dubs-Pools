import { NavLink , Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import '../styles/Root.css';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './content/Logo-black.jpeg';
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';


const drawerWidth = 350;
const navItems = ['Home', 'Pools', 'Gutters', 'Christmas' , 'Driveways'  , 'Contact'];

export default function Root(props) {

    const{ window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center' , color: '#fff' , backgroundColor : 'black', display : {md : 'block' , lg : 'block' , xl : 'none'}}}>
            <Box sx ={{justifyContent : 'space-between', display :{ xs : 'flex' , sm : 'flex' , md : 'flex' , lg : 'flex'}}}>
                <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        href="/home"
                        sx={{ mr: 0, marginTop : 0 }}
                        >
                            <img 
                            src={logo}
                            alt="Logo"
                            style={{maxWidth : '20vh'}}
                            />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'block' } }}
                >
                    <CloseIcon   sx={{fontSize : '50px' , display : {md : 'block' , lg : 'block' , xl : 'none'}}}/>
                </IconButton>
            </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton style={{textAlign : 'center'}} sx={{ textAlign: 'center' , fontSize: '3vh'}}>
                    <NavLink style={{color: '#fff'  , textDecoration : 'none', textAlign : 'center', width : '100%', padding : '1vw'}} to={"/" + item}>{item}</NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <AppBar sx={{display : 'flex'}} style={{backgroundColor : 'black'}} position="sticky" component='nav'>
                <Toolbar>
                <Box flexGrow={1}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        href="/home"
                        sx={{ mr: 2 }}
                        >
                            <img 
                            src={logo}
                            alt="Logo"
                            style={{maxWidth : '100%', maxHeight : '10vh'}}
                            />
                    </IconButton>
                </Box>
                <Box flexGrow={3} />
                <Box sx={{  display: {  sm : 'none', md: 'none' , xs : 'none' , xl: 'block' } , flexGrow : 1}} style={{fontSize : '50px' }}>
                    {navItems.map((item) => (
                    <Button className="menuButton" key={item} sx={{padding : '1vw' , fontSize: '3vh', color: '#fff' }}>
                        <NavLink style={{color: '#fff'  , textDecoration : 'none'}} to={"/" + item}>{item}</NavLink>
                    </Button>
                    ))}
                </Box>
                <Box flexGrow={1}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'block' } }}
                    >
                        <MenuIcon 
                        sx={{fontSize : '50px' , display : {md : 'block' , lg : 'block' , xl : 'none'}}}
                        />
                    </IconButton>
                </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                container={container}
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{ 
                    display: { xs: 'block', sm: 'block' , xl : 'none'},
                    minWidth : '100px',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                    {drawer}
                    <div sx={{boxShadow : 'none'}} style={{ backgroundColor: 'black', height: '100%' }} />
                </Drawer>
            </nav>

            <div style={{height : '100%' , overflowX : 'hidden' , overflowY : 'hidden' , marginLeft: '0', paddingTop : '0' , marginRight: '0' , paddingLeft: '0', paddingRight : '0', maxWidth : '100vw'}}>
                <Outlet/>
            </div>
        
        </div>
    );
}