import { FC, useState, useContext, ChangeEvent, FormEvent } from 'react';

import { TodoContext } from '../context/todo/';

import styles from '../styles/TodoForm.module.css';


export const TodoForm: FC = () => {
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [inputDescValue, setInputDescValue] = useState('');
  const { addNewEntry } = useContext(TodoContext);

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputTitleValue(e.target.value);
  }

  const handleDescOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputDescValue(e.target.value);
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewEntry(inputTitleValue, inputDescValue);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label className={styles.todoFormLabel}>Title</label>
      <br />

      <input 
        type='text'
        placeholder='Todo Title...'
        name='todo_title'
        className={styles.todoFormInput}
        onChange={ handleTitleOnChange }
      /> 
      <br />
      <br />

      <label className={styles.todoFormLabel}>Description</label>
      <br />

      <input 
        type='text'
        placeholder='Todo Description...'
        name='todo_description'
        className={styles.todoFormInput}
        onChange={ handleDescOnChange }
      />

      <button className={styles.todoFormSave}>Save</button>
    </form>
  );
} 