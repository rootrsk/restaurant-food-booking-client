import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import NavigationButton from './NavigationButton';
import BoltIcon from '@mui/icons-material/Bolt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Switch } from '@mui/material';
const drawerWidth = 240;
let isMobile = false
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    border:'none',
    // background: '#252B3B'
});

const closedMixin = (theme) => {
    return ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        border: 'none',
        

    })
}
    

const DrawerHeader = styled('div')(({ theme }) => ({
    // display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    
}));

const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(!open && {
        // marginLeft:`calc(${theme.spacing(7)} + 1px)`,
        width: `calc(100% - ${theme.spacing(8)})`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    }),
    bgcolor:'background.paper'
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        
        ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
        }),
        border: 'none',
        marginTop: '0px',
        paddingTop: '0px',
        
        // background: '#252b3b !important' wo
    }),
);

function AdminLayout({children}) {
    // console.log(children.props)
    const isDesktop = useMediaQuery('(min-width:1600px)');
    const theme = useTheme();
    const [open, setOpen] = React.useState(isDesktop);
    const handleDrawerOpen = () => {
        if (isDesktop) return
        setOpen(!open);
        
    };
    const handleDrawerClose = () => {
        if(isDesktop) return
        setOpen(false);
    };
    React.useEffect(()=>{
        setOpen(isDesktop)
    },[isDesktop])
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar 
                position="fixed" 
                open={open}
                sx={{
                    // bgcolor:'background.paper',
                    shadow:0,
                    border:'none',
                    boxShadow:'none',
                    bgcolor: 'background.paper',
                    // background:'blue'
                }}
            >
                <Toolbar
                    sx={{
                        bgcolor:'background.paper'
                    }}
                >
                    <Stack 
                        direction='row' 
                        justifyContent='space-between' width='100%' >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                        >
                           {<MenuIcon sx={{color:'gray'}}  />}
                        </IconButton>
                        <Stack 
                            sx={{
                                display:'flex',
                                flexDirection:'row'
                            }}
                            // checked={children && children.props.themeMode}
                        >
                            {/* <Switch 
                                checked={children && 
                                    children.props.themeMode==='light'?false:true
                                }
                                onChange={children && children.props.toggleTheme}
                                checkedIcon={<DarkModeIcon sx={{color:'blue'}}  />}
                            /> */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={children && children.props.toggleTheme}
                                sx={{
                                    marginRight: '10px'
                                }}
                        >
                           {children.props.themeMode==='light'
                           ?<LightModeIcon sx={{color:'black'}}  />
                           :<DarkModeIcon sx={{color:'white',}}  />}
                        </IconButton>
                            <Avatar 
                                src='https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/profile/user-uploads/user-04.jpg' 
                                alt='profile' 
                            />
                        </Stack>    
                    </Stack>
                    
                    
                </Toolbar>
            </AppBar>
            <Drawer 
                variant="permanent" 
                open={open}
                sx={{
                    background:'black',
                    border:'none',
                }}
            
            >
                <DrawerHeader>
                    {/* <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton> */}
                    <List>
                        <NavigationButton name='Testhunger' icon={<BoltIcon color='gray' />} path='/' open={open} />
                    </List>
                </DrawerHeader>
                <Divider />
                <List>
                    <NavigationButton name='Home' icon={<HomeIcon />} path='/' open={open} />
                    <NavigationButton name='Dashboard' icon={<DashboardIcon />} path='/admin' open={open} />
                    <NavigationButton name='Recipies' icon={<FastfoodIcon />} path='/admin/recipie' open={open} />
                    <NavigationButton name='Users' icon={<PeopleAltIcon />} path='/admin/user' open={open} />
                    <NavigationButton name='Home' icon={<HomeIcon />} path='/' open={open} />
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3,pt:7,bgcolor:'background.body',minHeight:'100vh' }}>
                {/* <DrawerHeader /> */}
                { children }
            </Box>
        </Box>
    );
}

export default AdminLayout