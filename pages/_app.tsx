import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseClient from 'firebaseConfig/client';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
   const [user, loading, error] = useAuthState(firebaseClient.auth());

   return (
      <Layout isLoading={loading}>
         <Component {...pageProps} currentUser={user} />
      </Layout>
   );
}

export default MyApp;
