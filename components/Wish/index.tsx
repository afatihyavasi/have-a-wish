import React from 'react';
import firebaseClient from 'firebaseConfig/client';

type WishType = {
   currentUser: firebaseClient.User;
   doc: firebaseClient.firestore.QueryDocumentSnapshot<firebaseClient.firestore.DocumentData>;
};

const Wish: React.FC<WishType> = (props) => {
   const { currentUser, doc } = props;
   return (
      <div>
         <h1>{doc.data().wish}</h1>
         <h2>{currentUser.displayName}</h2>
         <h4>{currentUser.photoURL}</h4>
      </div>
   );
};

export default Wish;
