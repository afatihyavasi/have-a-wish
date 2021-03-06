import Head from 'next/head';
import firebaseClient from 'firebaseConfig/client';
import Auth from '@/components/Auth';
import Wishes from '@/components/Wishes';

type HomeTypes = {
   currentUser: firebaseClient.User | null | undefined;
};

export default function Home(props: HomeTypes) {
   const { currentUser } = props;
   return (
      <div>
         <Head>
            <title>Have a wish</title>
            <meta name='description' content='Have a wish app' />
         </Head>
         {currentUser ? <Wishes currentUser={currentUser} /> : <Auth />}
      </div>
   );
}
