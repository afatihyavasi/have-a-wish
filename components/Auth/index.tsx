import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseClient from 'firebaseConfig/client';
import Image from 'next/image'

const uiConfig = {
   signInFlow: 'popup',
   signInSuccessUrl: '/',
   signInOptions: [firebaseClient.auth.GithubAuthProvider.PROVIDER_ID],
};

const Auth = () => {
   return (
      <div className={'px-5'}>
         <h1 className={'text-center mt-20 text-3xl text-gray-700 antialiased'}>
            Make a wish and wait until it comes{' '}
            <span className={'text-purple-500 font-bold underline'}>true</span>
         </h1>
         <figure className={'flex justify-center my-20'}>
            <Image
               src={'/wishes.svg'}
               alt={'Cover pic'}
               width={300}
               height={300}
            />
         </figure>

         <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebaseClient.auth()}
         />
      </div>
   );
};

export default Auth;
