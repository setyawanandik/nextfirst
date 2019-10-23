import React from 'react'
import Head from 'next/head'
import Appbar from '../components/appbar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import RecipeReviewCard from '../components/card';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
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
