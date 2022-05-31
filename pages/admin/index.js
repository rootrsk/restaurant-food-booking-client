import Head from 'next/head'
import React,{ useState, useEffect} from 'react'
import { connect } from 'react-redux'
import AdminLayout from '../../components/admin/AdminLayout'
import CountList from '../../components/admin/CountList'
import { fetchDashboardDetails } from '../../src/redux/actions/dashboard'
import { Box } from '@mui/material'
import UserList from '../../components/admin/UserList'
import { fetchRecipie } from '../../src/redux/actions/recipie'
import RecipieList from '../../components/admin/RecipieList'
function Dashboard(props) {
    console.log(props.dashboard)
    const {notification,recipie} = props
    useEffect(()=>{
        if(recipie.recipies.length === 0){
            fetchRecipie()
        }
        fetchDashboardDetails()
    },[])
    useEffect(() => {
        if (notification.notifications.length === 0) {
            // requestNotification()
        }
    }, [])
    return (
        <div 
            style={{position:'relative',zIndex:'0'}} 
            _light={{background:'gray.100'}}
        >
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <Box>
                {props.dashboard && props.dashboard.counts &&
                
                    <CountList counts={props.dashboard.counts} />
                }
            </Box>
            <h3>Payments</h3>
            <h3>Users</h3>
            <Box>
                {props.dashboard && props.dashboard.users &&
                
                    <UserList users={props.dashboard.users} />
                }
            </Box>
            <h3>Recipies</h3>
            <Box
                sx={{
                    height:380,
                    overflowY:'scroll'
                }}
            >
                {recipie && 
                    <RecipieList recipies={recipie.recipies} />
                }
            </Box>
            
        </div>
    )
}
Dashboard.Layout = AdminLayout
const mapStateToProps = (state) => state

export default connect(mapStateToProps) (Dashboard)