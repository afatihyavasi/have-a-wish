import React, { useState } from 'react';
import Header from '@/components/Header';
import firebaseClient from 'firebaseConfig/client';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loading from '@/components/Loading';
import Wish from '@/components/Wish';

type WishesTypes = {
   currentUser: firebaseClient.User;
};

const Wishes: React.FC<WishesTypes> = ({ currentUser }) => {
   const [wishes, wishesLoading, wishesError] = useCollection(
      firebaseClient.firestore().collection('wishes'),
      {}
   );
   const [wish, setWish] = useState<string>('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWish(e.target.value);
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await firebaseClient
         .firestore()
         .collection('wishes')
         .doc(currentUser.uid)
         .set({ wish });
      setWish('');
   };
   return (
      <div>
         <Header />
         Do you have something to say ?
         <form onSubmit={handleSubmit}>
            <input
               value={wish}
               onChange={handleChange}
               placeholder='Wish'
               required
            />
            <button type='submit'>Send</button>
         </form>
         <Loading isLoading={wishesLoading}>
            <div>
               {wishes?.docs.map((doc) => (
                  <Wish key={doc.id} doc={doc} currentUser={currentUser} />
               ))}
            </div>
         </Loading>
      </div>
   );
};

export default Wishes;
