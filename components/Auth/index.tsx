import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseClient from 'firebaseConfig/client';

const uiConfig = {
   signInFlow: 'popup',
   signInSuccessUrl: '/',
   signInOptions: [firebaseClient.auth.GithubAuthProvider.PROVIDER_ID],
};

const Auth = () => {
   return (
      <div>
         <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebaseClient.auth()}
         />
      </div>
   );
};

export default Auth;
