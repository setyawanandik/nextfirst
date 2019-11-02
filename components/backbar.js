
import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


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
    avatarx: {
        marginLeft: 0,
    },
    toolbar: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 0, paddingRight: 0
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 6, paddingRight: 6
        },
    },
    appbar: {
        boxShadow: "none",
        backgroundColor: "transparent"
    },
    empty: {
        backgroundColor: "#fff",
        color: "black",
        //    boxShadow: "0px 2px 5px -1px rgba(0,0,0,0.75)"
    }
}));



export default function Appbar(props) {
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });
    const classes = useStyles();

    return (
        <div>
            <AppBar className={!trigger ? classes.appbar : classes.empty} >
                <Container maxWidth="sm">
                    <Toolbar>
                        <Link href="/" >
                            <IconButton edge="start" color="inherit" aria-label="back">
                                <ArrowBackRoundedIcon />
                            </IconButton>
                        </Link>
                        <Typography variant="h6" className={classes.title}>
                        </Typography>
                        <Link href="/" >
                            <Avatar style={{cursor:'pointer'}} alt="resipaket.com" src="../logo.png" />
                        </Link>

                    </Toolbar>
                </Container>
            </AppBar>

        </div>

    );
}
