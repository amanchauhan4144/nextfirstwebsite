// pages/_app.js
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
   
       <Layout>
        <Component {...pageProps} />
        </Layout>
     
  );
}

export default MyApp;
