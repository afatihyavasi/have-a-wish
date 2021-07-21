import firebaseClient from 'firebaseConfig/client';

const Header = () => {
   const logOut = () => {
      firebaseClient.auth().signOut();
   };

   return (
      <div className={'flex justify-end'}>
         <button
            className={
               'bg-green-100 text-green-500 p-2 rounded-md transition hover:bg-green-200 hover:text-green-600'
            }
            onClick={logOut}
         >
            Log out
         </button>
      </div>
   );
};

export default Header;
