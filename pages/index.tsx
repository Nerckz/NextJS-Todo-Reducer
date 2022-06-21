import { useContext } from 'react';

import { NextPage } from 'next';

import { TodoCard, TodoForm } from '../components';

import { TodoContext } from '../context/todo/';

import { Entry } from '../interfaces/entry';

import styles from '../styles/HomePage.module.css';



const HomePage: NextPage = () => {
   const { entries } = useContext(TodoContext)

   return (
      <div className={styles.mainContainer}>
         <div className={styles.mainContainerLeft}>
            {
               entries.map(entry => (
                  <TodoCard key={entry.title} entry={entry} />
               ))
            }
         </div>

         <div className={styles.mainContainerRight}>
            <TodoForm />
         </div>
      </div>
   );
}

export default HomePage;