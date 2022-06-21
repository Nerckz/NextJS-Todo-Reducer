import { FC, useState, useContext } from 'react';

import { TodoContext } from '../context/todo/TodoContext';
import { Entry } from '../interfaces';

import { TodoEditForm } from './';

import styles from '../styles/TodoCard.module.css';


interface Props {
  entry: Entry;
}

export const TodoCard: FC<Props> = ({ entry }) => {
  const [isEdditing, setIsEdditing] = useState(false);
  const { deleteEntry, entries } = useContext(TodoContext);

  console.log(entries);

  const handleIsEdditing = () => {
    if (!isEdditing) {
      setIsEdditing(true);
    } else {
      setIsEdditing(false);
    }
  }

  const handleDeleteCard = () => {
    console.log(entries);
    deleteEntry(entry);
  }

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardContainerWrapper}>
          <div className={styles.cardContainerTop}>
            {
              !isEdditing
                ?
                <>
                  <h1 className={styles.cardTodoTitle}>{entry.title}</h1>
                  <p className={styles.cardTodoDesc}>{entry.desc}</p>
                </>
                : <TodoEditForm entry={entry} />
            }
          </div>

          {
            isEdditing
              ? null
              :
              <div className={styles.cardContainerBottom}>
                <button onClick={handleDeleteCard} className={styles.cardButtonDelete}>
                  Delete
                </button>

                <button onClick={handleIsEdditing} className={styles.cardButtonUpdate}>
                  Update
                </button>
              </div>
          }
        </div>
      </div>
    </>
  );
}