import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Appbar from '../../components/appbar'
import Backbar from '../../components/backbar'
import Botbar from '../../components/botbar';
import NextNprogress from '../../components/progressbar';

import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';


import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

// Post.getInitialProps = async ({ query: { slug } }, res) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
//   const post = await response.json()
//   return { post }
// }
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
}));

function Post({ post }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400italic,400,500,500italic,700,700italic" />
      </Head>
      <NextNprogress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      {/* <Appbar /> */}
      <Backbar />
      <Container maxWidth="sm" style={{ marginTop: 0, marginBottom: 70 }}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={"https://picsum.photos/600/250?random=" + post.id}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <h1>{post.title.toUpperCase()}</h1>
              {post.body[0].toUpperCase() + post.body.substring(1)}
              <br /><br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
          </Avatar>
            }
            action={
              <Button variant="outlined" color="primary">
                Follow
              </Button>
            }
            title="Andik Setyawan"
            subheader="Software engineer on a mission to help people build better digital products."
          />
        </Card>
      </Container>
      <Botbar />
    </div>
  )
}

Post.getInitialProps = async ({ query: { slug } }, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  const post = await response.json()
  return { post }
}


// const router = useRouter()
//     const { slug } = router.query

// Post.getInitialProps = async ({ req, query }) => {
//   console.log('hahahahaha');
//   console.log(req);
//   console.log(query);

//   console.log(req);
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1'+query.id)
//   const json = await res.json() // better use it inside try .. catch
//   return { stars: json }
// }



export default Post
