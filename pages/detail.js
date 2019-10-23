import React from 'react'
//import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Detail = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>My Blog Post: {slug}</p>
}

export default Detail



