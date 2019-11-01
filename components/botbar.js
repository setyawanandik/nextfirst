import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Container from '@material-ui/core/Container';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import Router, { withRouter, useRouter } from 'next/router'




import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
    //const useStyles = makeStyles({
    box: {
        width: '100%',
        padding: 0,
        margin: 0,
        bottom: 0,
        left: 'auto',
        right: 0,
        position: 'fixed',
    },
    root: {
        width: '100',
        margin: 0,
        padding: 0,
        // backgroundColor:'yellow'
    },
    con: {
        [theme.breakpoints.down('xs')]: {
            // marginLeft: theme.spacing(3),
            paddingRight: 0,
            paddingLeft: 0,

        },
    }
}));

export default function Botbar() {
    const classes = useStyles();
    const router = useRouter()
    const q = router.pathname
    const [value, setValue] = React.useState(q);
    
    console.log(q);

    return (
        <div className={classes.box}>
            <Container maxWidth="sm" className={classes.con}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        Router.push(newValue);
                      //  setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    {/* <ActiveLink href='/about'>About</ActiveLink> */}
                    <BottomNavigationAction label="Home" value="/" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction label="Favorites" value="/detail" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Inbox" value="/inbox" icon={<EmailRoundedIcon />} />
                    <BottomNavigationAction label="Account" value="/akun" icon={<PersonRoundedIcon />} />

                </BottomNavigation></Container>
        </div>
    );
}