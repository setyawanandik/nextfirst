import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';

import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '100%',
        marginBottom: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        // transform: 'rotate(0deg)',
        marginLeft: 'auto',
        // transition: theme.transitions.create('transform', {
        //     duration: theme.transitions.duration.shortest,
        // }),
    },

    avatar1: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar1}>
                        R
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title.toUpperCase()}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={"https://picsum.photos/600/250?random=" + props.id}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description[0].toUpperCase()+props.description.substring(1)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <Link href="/">
                    <IconButton aria-label="add to favorites">
                        <Badge badgeContent={props.id} color="secondary">
                            <FavoriteIcon />
                        </Badge>

                    </IconButton>
                </Link>

                <Link href='/post/[slug]' as={`/post/${props.id}`}>
                    <IconButton aria-label="More read">
                        <SubjectRoundedIcon />
                    </IconButton>
                </Link>


                <IconButton
                    className={classes.expand}
                    aria-label="show more"
                >
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}