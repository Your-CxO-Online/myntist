 
import Head from 'next/head' 
import { Inter } from 'next/font/google'   
import Navbars from '@/components/founders/Navbars'
import Footer from '@/components/founders/Footer'
import Hero from '@/components/founders/Hero' 
import Features from '@/components/founders/Features'
import Counter from '@/components/founders/Counter'
import Benefits from '@/components/founders/Benefits'
import Myntist from '@/components/founders/Myntist'
import CallAction from '@/components/founders/CallAction'
import Testimonial from '@/components/founders/Testimonial'
import Investments from '@/components/founders/Investments'


const inter = Inter({ subsets: ['latin'] })

const founders = () => {
    return ( 
        <>
        <Head>
            <title>Founders Pass</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main-wrapper founders-wrapper"> 
            <Navbars/>
            <Hero/>
            <Features/>
            <Counter/>
            <Benefits/>
            <Myntist/>
            <Investments/>
            {/* <Testimonial/> */}
            <CallAction/>
            <Footer/>
        </main>
        </>
    )
}

export default founders 