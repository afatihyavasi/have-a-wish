import firebaseClient from 'firebaseConfig/client';


const Header = () => {

   const logOut = () => {
      firebaseClient.auth().signOut();
   };

   return (
      <div>
         <button onClick={logOut}>Log out</button>
      </div>
   );
};

export default Header;
