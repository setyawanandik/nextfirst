import React from 'react'
import Head from 'next/head'
import Appbar from '../components/appbar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import RecipeReviewCard from '../components/card';
import NextNprogress from '../components/progressbar';


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      {/* <link rel='stylesheet' type="text/css" href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/> */}
    </Head>
    <NextNprogress
      color="red"
      startPosition="0.3"
      stopDelayMs="200"
      height="3"
    />
    <Appbar />
    <Container maxWidth="sm" style={{ marginTop: 60 }}>
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </Container>
    <Container maxWidth="sm" style={{ marginTop: 60 }}>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>
    <Botbar />
    <style global jsx>{`
        body {
          background: #f7f7f7;
        }
      `}</style>
  </div>
)

export default Home
