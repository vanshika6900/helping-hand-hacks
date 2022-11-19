import '../styles/globals.css'
import Head from 'next/head'

//INTERNAL IMPORT
import { NavBar } from '../components/componentsindex';
// import NavBar from '../components/componentsindex';

const MyApp = ({Component, pageProps})=> (
    <div>
        <Head>
            <title>Helping Hands</title>
        </Head>
    <NavBar />
    <Component {...pageProps} />
</div>
);

export default MyApp;
