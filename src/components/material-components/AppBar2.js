import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useHistory, withRouter} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
}));

function AppBar2({handleCandleClick}) {
  const history = useHistory()
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color = "secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick = {()=>history.push('/home')}>
                <Typography className={classes.title} variant="h6" noWrap>
                    Home
                </Typography>
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick = {()=>history.push('/categories')}>
            <Typography className={classes.title} variant="h6" noWrap>
                Categories
            </Typography>
            </IconButton>
          
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick = {()=>history.push('/homefragnance')}>
          <Typography className={classes.title} variant="h6" noWrap>
            Home Fragrance
          </Typography>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Typography className={classes.title} variant="h6" noWrap>
            Accents
          </Typography>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Typography className={classes.title} variant="h6" noWrap>
            Gifts
          </Typography>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Typography className={classes.title} variant="h6" noWrap>
            Sale
          </Typography>
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBar2