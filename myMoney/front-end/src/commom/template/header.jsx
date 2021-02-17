import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from './sidebar'
import "./custom.css";
import clsx  from 'clsx';

import {useSelector, useDispatch} from 'react-redux'

import { toggleSideBar} from './headerActions';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  title: {
    marginRight: "10px",
  },
}));
const Header = (props) => {
  const header = useSelector(state => state.header);
  const dispatch = useDispatch();
  const classes = useStyles();
  const toggle = () => dispatch(toggleSideBar())
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: header.open,
        })}
        color="primary"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton,  header.open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Money
          </Typography>
          <i className="fa fa-money fa-lg" aria-hidden="true"></i>
        </Toolbar>
      </AppBar>
      <SideBar open={ header.open} onClick={toggle}/>
    </div>
  );
};

export default Header
