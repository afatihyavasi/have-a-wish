import React from 'react';
import Loading from '@/components/Loading';

interface ILayoutProps {
   isLoading: boolean;
}

const Layout: React.FC<ILayoutProps> = (props) => {
   const { isLoading, children } = props;
   return (
      <div>
         <Loading isLoading={isLoading}>
            <main>{children}</main>
         </Loading>
      </div>
   );
};

export default Layout;
