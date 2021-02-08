/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import  Collapse  from '@material-ui/core/Collapse';
import EditIcon from '@material-ui/icons/Edit';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => {
    nested:{
        paddingLeft: theme.spacing(4)
    }
})
export default props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <List>
            <ListItem component={Link} to='/home' button>
                <ListItemIcon><DashboardIcon/> </ListItemIcon>
                <ListItemText primary='Dashboard'/>
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon><EditIcon/></ListItemIcon>
                <ListItemText primary="Cadastro"/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem component={Link} to='/billingcycles' button  className={classes.nested}>
                        <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
                        <ListItemText primary="Ciclos de Pagamentos"/>
                    </ListItem>    
                </List>
            </Collapse>
        </List>
    )
}
