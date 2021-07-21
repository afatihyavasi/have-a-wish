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
   const [wishes, wishesLoading] = useCollection(
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
      <Loading isLoading={wishesLoading}>
         <div className={'container mx-auto p-5'}>
            <Header />
            <h1 className={'my-10 text-xl sm:text-3xl'}>
               Do you have{' '}
               <span className={'text-purple-400'}>something to say ?</span>
            </h1>
            <form onSubmit={handleSubmit}>
               <input
                  value={wish}
                  className={
                     'border-2 border-indigo-300 w-full py-2 px-2 rounded'
                  }
                  onChange={handleChange}
                  placeholder='Wish'
                  required
               />
               <div className={'flex justify-end my-3'}>
                  <button
                     className={'bg-pink-50 text-pink-500 py-1 px-2 rounded'}
                     type='submit'
                  >
                     Send
                  </button>
               </div>
            </form>
            <div>
               {wishes?.docs.map((doc) => (
                  <Wish key={doc.id} doc={doc} />
               ))}
            </div>
         </div>
      </Loading>
   );
};

export default Wishes;
