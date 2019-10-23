import React from 'react'
import Head from 'next/head'
import Appbar from '../components/appbar'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import RecipeReviewCard from '../components/card';

import Link from 'next/link'


const Detail = () => (
    <div>
        <Head>
            <title>Detail</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Appbar />
        <Container maxWidth="sm" style={{ marginTop: 160 }}>
            <h1>Detail page</h1>
            <Link href="/">
                <a>Kembali Home</a>
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

export default Detail
