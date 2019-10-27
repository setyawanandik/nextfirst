
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Appbar from '../components/appbar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Botbar from '../components/botbar';
import NextNprogress from '../components/progressbar';

function Fetchdata(props) {
    return (
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

                <br/>
                <Link href="/detail">
                    <a>detail</a>
                </Link>
                <br/>
                <p>Load dari http : {props.stars} ⭐️</p>
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

Fetchdata.getInitialProps = async () => {
    const res = await fetch('https://api.pulsaone.com/transaction/query/Anjing/3')
    const json = await res.json() // better use it inside try .. catch

    return { stars: json[0].invoice }
}

export default Fetchdata