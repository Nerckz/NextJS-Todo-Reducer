import { FC, useState, useContext, ChangeEvent, FormEvent } from 'react';

import { TodoContext } from '../context/todo/';

import { Entry } from '../interfaces';

import styles from '../styles/TodoEditForm.module.css';

interface Props {
  entry: Entry;
}

export const TodoEditForm: FC<Props> = ({ entry }) => {
  const [inputTitleValue, setInputTitleValue] = useState('');
  const [inputDescValue, setInputDescValue] = useState('');
  const { editEntry } = useContext(TodoContext);

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputTitleValue(e.target.value);
  }

  const handleDescOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputDescValue(e.target.value);
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEntry: Entry = {
      id: entry.id,
      title: inputTitleValue,
      desc: inputDescValue
    }

    editEntry(newEntry);
  }

  return (
    <form className={styles.todoForm} onSubmit={handleOnSubmit}>
      <label className={styles.todoFormLabel}>Title</label>
      <br />

      <input
        type='text'
        placeholder='Todo Title...'
        name='todo_title'
        className={styles.todoFormInput}
        onChange={handleTitleOnChange}
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
        onChange={handleDescOnChange}
      />

      <button className={styles.todoFormSave}>Save</button>
    </form>
  );
} 