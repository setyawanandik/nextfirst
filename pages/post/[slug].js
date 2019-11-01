import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Appbar from '../../components/appbar'
import Botbar from '../../components/botbar';
import NextNprogress from '../../components/progressbar';

// Post.getInitialProps = async ({ query: { slug } }, res) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
//   const post = await response.json()
//   return { post }
// }

const Post = ({ post }) => (
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
    <Appbar />
    <Container maxWidth="sm" style={{ marginTop: 160 }}>
      <h1>{post.title.toUpperCase()}</h1>
      <Link href="/">
        <a>Kembali Home</a>
      </Link>
    </Container>

    <Container maxWidth="sm" style={{ marginTop: 60 }}>
      <Typography variant="body2" color="textSecondary" component="p">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
    </Container>
    <Container maxWidth="sm" style={{ marginTop: 60 }}>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>

    <Botbar />
    <style global jsx>{`
        body {
          background: #f7f7f7;
          font-family: Roboto, sans-serif;
          font-size: 15px;
          font-weight: 400;
          font-style: normal;
        }

      `}</style>
  </div>
)

Post.getInitialProps = async ({ query: { slug } }, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
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
