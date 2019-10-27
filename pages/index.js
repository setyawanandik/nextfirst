import React from 'react'
import Head from 'next/head'
import Appbar from '../components/appbar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import RecipeReviewCard from '../components/card';
import NextNprogress from '../components/progressbar';
import fetch from 'isomorphic-unfetch'


function Home(props) {


  const listItems = props.posts.map((data) =>
    <RecipeReviewCard key={data.id} title={data.title} id={data.id} description={data.body} />
  );

  return (
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
        {listItems}
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
}
Home.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json() // better use it inside try .. catch
  return { posts: json }
}

export default Home
