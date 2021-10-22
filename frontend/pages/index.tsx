import type { NextPage } from 'next'
import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Request from '../lib/Request'

const Home: NextPage = () => {
  const [obj, setObj] = useState("Hello, Mars");

  const handleClick = async () => {
    let response = await Request();
    console.log({response});
    setObj(response.phrase);
  }

  return (
    <div>
      <Head>
        <title>Hello World!</title>
        <meta name="description" content="Our nice description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={handleClick}>{obj}</button>
    </div>
  )
}

export default Home
