import React,{ useState} from 'react'
import { Slide,Box,Flex, Heading} from 'native-base'
import { NavLink } from 'react-router-dom';
import Ripples from 'react-ripples'
import { useLocation } from 'react-router';
import {
    RiDashboardLine,
    RiNotification3Line,
    RiStickyNoteLine,
    RiVideoLine,
    RiPriceTag3Line,
    RiMenuFill,
    RiCloseFill,
} from "react-icons/ri";
function Header() {
    const [open,setOpen] = useState(false)
    const location = useLocation()
    return (
        <Box className='admin-header' style={{zIndex:'2'}} >
            <Flex direction='row' bg='blueGray.800' height='40px' style={{placeItems:'center'}} >
                <Ripples className='icon-button' onClick={()=>setOpen(!open)} >
                    {open?<RiCloseFill color='#fff' />:<RiMenuFill color='#fff' />}
                </Ripples>
                <Box>
                    <Heading 
                        fontSize='20px'
                        _light={{color:'white'}} 
                    >Ajay Reasoning Classes</Heading>
                </Box>
            </Flex>
            <Box className='drawer-container'  >
                <Slide in={open} placement='left' width='250px' bg='blueGray.800' height='100%' >
                    <Box bg='blueGray.800' p='2' >
                        <div className='route-container' >
                            <Ripples>
                                <NavLink 
                                    to='/admin/dashboard' 
                                    className={`route-navlink ${
                                        location.pathname=='/admin/dashboard' ? 'active-navlink':''}`
                                    }
                                    // style={?{background:'#FFFFFF'}:{}}
                                    exact
                                >
                                    <RiDashboardLine className='route-icon' />  
                                    <span className='route-name' >Dashboard</span>
                                </NavLink>
                            </Ripples>
                            <Ripples
                               
                            >
                                <NavLink 
                                    to='/admin/courses' 
                                    className={`route-navlink ${
                                        location.pathname=='/admin/courses' ? 'active-navlink':''}`
                                    }
                                    strict 
                                >
                                <RiVideoLine className='route-icon' /> <span className='route-name' >Courses</span>
                                </NavLink>
                            </Ripples>
                            <Ripples>
                                <NavLink 
                                    to='/admin/quizzes' 
                                    className={`route-navlink ${
                                        location.pathname=='/admin/quizzes' ? 'active-navlink':''}`
                                    }
                                >
                                    <RiStickyNoteLine className='route-icon' /> <span className='route-name' >Quizs</span>
                                </NavLink>
                            </Ripples>
                            <Ripples>
                                <NavLink 
                                    to='/admin/notifications' 
                                    className={`route-navlink ${
                                        location.pathname=='/admin/notifications' ? 'active-navlink':''}`
                                    }
                                >
                                    <RiNotification3Line className='route-icon' /> <span className='route-name' >Notifications</span>
                                </NavLink>
                            </Ripples>
                            <Ripples>
                                <NavLink 
                                    to='/admin/offers' 
                                    className={`route-navlink ${
                                        location.pathname=='/admin/offers' ? 'active-navlink':''}`
                                    }
                                >
                                <RiPriceTag3Line className='route-icon' /> <span className='route-name' >Offers</span>
                                </NavLink>
                            </Ripples>
                        </div>
                        
                    </Box>
                </Slide>
            </Box>
        </Box>
    )
}

export default Header
