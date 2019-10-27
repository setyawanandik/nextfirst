import React from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Appbar from '../../components/appbar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../../components/botbar';
import RecipeReviewCard from '../../components/card';

import fetch from 'isomorphic-unfetch'

import Link from 'next/link'
//import { useRouter } from 'next/router'
import Router from 'next/router'

import NextNprogress from '../../components/progressbar';



const Post = ({post}) => (
  <div>
    <Head>
      <title>Detail {post.title}</title>
     
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <NextNprogress
      color="red"
      startPosition="0.3"
      stopDelayMs="200"
      height="3"
    />
    <Appbar />
    <Container maxWidth="sm" style={{ marginTop: 160 }}>
      <h1>{post.title}</h1>
      <Link href="/">
        <a>Kembali Home</a>
      </Link>
      <Link href="/fetchdata">
        <a>Data</a>
      </Link>
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

Post.getInitialProps = async ({ query: { slug } }, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
  const post = await response.json()

  return { post }
}

export default Post
