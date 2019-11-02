import React from 'react'
import Head from 'next/head'
import Appbar from '../components/appbar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import RecipeReviewCard from '../components/card';
import NextNprogress from '../components/progressbar';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react'

import Button from '@material-ui/core/Button';
import Shimmer from '../components/shimmer';



function Home(props) {

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(props.page);
  const [limit, setLimit] = useState(props.limit);
  const [loadedPost, setPost] = useState(props.posts);



  const listItems = loadedPost.map((data) =>
    <RecipeReviewCard key={data.id} title={data.title} id={data.id} description={data.body} />
  );

  const getMorePosts = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const postNext = await fetch('https://jsonplaceholder.typicode.com/posts?_page=' + nextPage + '&_limit=' + limit)
    const postNextJson = await postNext.json();
    setPost([...loadedPost, ...postNextJson]);
    setPage(nextPage);
    setLoading(false);

  }


  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400italic,400,500,500italic,700,700italic" />

        {/* <link rel='stylesheet' type="text/css" href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/> */}
      </Head>
      <NextNprogress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Appbar />
      <Container maxWidth="sm" style={{ marginTop: 100 }}>
        {listItems}
      </Container>

      {loading ? 
      <Container maxWidth="sm" style={{ marginTop: 10 }}>
        <Shimmer />
        <Shimmer />
      </Container>
        :
        <Container maxWidth="sm" style={{ marginTop: 0, textAlign: 'right' }}>
          <Button variant="outlined" color="primary" onClick={!loading ? getMorePosts : null}>
          Load More
          </Button>
        </Container>
      }



      <Container maxWidth="sm" style={{ marginTop: 60 }}>
        <Typography component="div" style={{ backgroundColor: 'transparent', height: '20vh' }} />
      </Container>



      <Botbar />
      {/* <style global jsx>{`
       body {
        background: #f7f7f7;
        font-family: Roboto, sans-serif;
        font-size: 15px;
        font-weight: 400;
        font-style: normal;
      }
      `}</style> */}
    </div>
  )
}

Home.getInitialProps = async () => {
  const page = 1;
  const limit = 2;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=' + page + '&_limit=' + limit)
  const json = await res.json() // better use it inside try .. catch
  // setState({ isLoading: false });
  return { page, limit, posts: json }
}

export default Home
