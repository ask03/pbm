import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
// import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'
import dynamic from 'next/dynamic'
import { Slider } from '../components/Slider'
// import { MintApp } from '../components/MintApp'
import { MintBanner } from '../components/MintBanner'
import { Roadmap } from '../components/Roadmap'
import { Referral } from '../components/Referral'
import { Team } from '../components/Team'
import { Perks } from '../components/Perks'
import { Account } from '../components/Account'
import { useWeb3React } from '@web3-react/core'
import useEagerConnect from '../hooks/useEagerConnect'
import { Balance } from '../components/Balance'

const Header = dynamic(() =>
  import('../components/Header').then(mod => mod.Header),
  { ssr: false }
)

const Home: NextPage = () => {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === 'string' && !!library;

  return (
    <>
      <Head>
        <title>Play Bird Mansion 🎉</title>
        <meta name="description" content="The Play Bird Mansion NFT - A collection of 6,969 randomly generated part birds on the Polygon Blockchain. Mint a bird for your exclusive party pass for Giveaways, NFT gaming, Airdrops and More!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='sticky top-0 z-50 h-0'>
        <Header triedToEagerConnect={triedToEagerConnect} />
      </div>

      <div className='relative'>

        <Banner />
        <Balance />
        {/* <Account triedToEagerConnect={triedToEagerConnect} /> */}
        <Welcome />
        <Slider />
        <MintBanner />
        {/* <MintApp /> */}
        <Roadmap />
        <Perks />
        <Referral />
        <Team />

        <Footer />
      </div>
    </>
  )
}

export default Home
