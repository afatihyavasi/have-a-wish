import React from 'react';
import firebaseClient from 'firebaseConfig/client';
import Loading from '@/components/Loading';
import Header from '@/components/Header';
import Spinner from '@/components/Spinner';

interface ILayoutProps {
   currentUser: firebaseClient.User | null | undefined,
   isLoading: boolean,
}


const Layout: React.FC<ILayoutProps> = (props) => {
   const { currentUser, isLoading, children } = props;
   return (
      <div>
         <Loading isLoading={isLoading}>
            {currentUser && <Header />}
            <Spinner />

            <main>{children}</main>
         </Loading>
      </div>
   );
};

export default Layout;
