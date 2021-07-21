import React from 'react';
import firebaseClient from 'firebaseConfig/client';

type WishType = {
   doc: firebaseClient.firestore.QueryDocumentSnapshot<firebaseClient.firestore.DocumentData>;
};

const Wish: React.FC<WishType> = (props) => {
   const { doc } = props;
   return (
      <div className={'text-xl'}>
         <h2 className={'border-l-2 pl-1 mt-4 text-green-400'}>
            ✨ ✨ <span>{doc.data().wish}</span>
         </h2>
      </div>
   );
};

export default Wish;
