
import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import PageviewIcon from '@material-ui/icons/Pageview';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


import ShareIcon from '@material-ui/icons/Share';

//import NextNprogress from 'nextjs-progressbar';





const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 0,
        marginLeft: 20,
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(3),
        //     width: 'auto',
        // },
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
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    avatar: {
        // marginLeft: -20,
    },
    toolbar: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 0, paddingRight: 0
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 6, paddingRight: 6
        },
    }
}));

export default function Appbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (

        <div className={classes.root}>
            <AppBar position="fixed">
                <Container maxWidth="sm">

                    {/* <NextNProgress /> */}
                    <Toolbar className={classes.toolbar}>
                        {/* <Link href="/">
                            <a><img height='40' width='40' src="./logo.png" alt="my image" /></a>
                        </Link> */}

                        <Link href="/"><a>
                            <Grid container justify="left" alignItems="left">
                                <Avatar alt="Remy Sharp" sizes="30" src="./logo.png" className={classes.avatar} />
                            </Grid></a>
                        </Link>

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

                </Container>

            </AppBar>
        </div>
    )
};



//export default Appbar