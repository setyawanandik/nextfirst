import React from 'react'
import Head from 'next/head'
import Appbar from '../components/appbar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import RecipeReviewCard from '../components/card';

import fetch from 'isomorphic-unfetch'

import Link from 'next/link'
//import { useRouter } from 'next/router'
import Router from 'next/router'

import NextNprogress from '../components/progressbar';



const Detail = () => (
    <div>
        <Head>
            <title>Detail</title>
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
            <h1>Detail page</h1>
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

Detail.getInitialProps = async ({ req }) => {
    console.log('haha');
    console.log(req);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await res.json() // better use it inside try .. catch
    return { stars: json }
}

export default Detail
